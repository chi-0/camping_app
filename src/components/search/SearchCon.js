import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { SearchSelect } from "./SearchSelect";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCamping } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown as regularDown,
  faThumbsUp as regularUp,
} from "@fortawesome/free-regular-svg-icons";

import notImage from "./img/notImage.png";
import { Link } from "react-router-dom";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { SearchCloseBtn } from "./SearchCloseBtn";
import { Loading } from "../Loading";

const Wrap = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  padding-left: 20px;
  letter-spacing: -1px;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-bottom: 10px;
  position: relative;

  @media screen and (max-width: 1000px) {
    width: fit-content;
    flex-direction: column;
    row-gap: 15px;
    align-items: start;
    padding: 0;
    margin-bottom: 0;
  }
`;

const Alert = styled.h3`
  font-size: 15px;
  font-weight: 500;
`;

const CloseBtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: 7%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const ConWrap = styled.div`
  width: 93%;
  height: 89%;
  overflow-y: scroll;

  @media screen and (max-width: 1000px) {
    overflow: visible;
    width: 100%;
  }
`;

const Con = styled.div`
  width: 100%;
  display: flex;
  column-gap: 15px;
  border-bottom: 1px solid #dcdcdc;
  padding: 25px 10px;

  @media screen and (max-width: 1000px) {
    padding: 25px 0;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 0;
  }
`;

const ConImg = styled.img`
  width: 47%;
  border-radius: 10px;
`;

const ConInnerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 22px;
`;

const Address = styled.span`
  font-size: 15px;
  line-height: 19px;
  margin-bottom: 15px;
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SortBtn = styled.button`
  all: unset;
  font-size: 14px;
  font-weight: 500;
  color: ${mainColor};
`;

const IconWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 18px;
  color: #cacaca;

  &.check {
    color: ${mainColor};
  }

  &:hover {
    color: ${mainColor};
  }
`;

const Message = styled.p`
  margin-top: 20px;
`;

export const SearchCon = ({ getData }) => {
  const [distance, setDistance] = useState(5000);
  const [ups, setUps] = useState();
  const [downs, setDowns] = useState();
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.location);
  const { isLat, isLon } = useSelector((state) => state.coordReducer);
  const { value: inputValid } = useSelector(
    (state) => state.searchValidReducer
  );

  const distanceData = (data) => {
    setDistance(data.distance);
  };

  const query = useQuery({
    queryKey: [isLon, isLat, distance],
    queryFn: getCamping,
  });

  const campingData = query.data?.response?.body?.items?.item;
  const campingValid = query.isLoading;

  useEffect(() => {
    const upChecked = document.querySelectorAll(".upChecked");
    const downChecked = document.querySelectorAll(".downChecked");

    setUps(upChecked);
    setDowns(downChecked);
    getData(campingData);
  }, [campingData, count, getData]);

  const upHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const siblingTarget = target.nextSibling;
    const title =
      target.parentNode.parentNode.previousSibling.childNodes[0].innerText;
    const address =
      target.parentNode.parentNode.previousSibling.childNodes[1].innerText;
    const homeUrl =
      target.parentNode.parentNode.parentNode.parentNode.parentNode.href;
    const imgUrl = target.parentNode.parentNode.parentNode.previousSibling.src;
    setCount((prev) => prev + 1);

    if (!target.classList.contains("check")) {
      target.classList.add("check");
      siblingTarget.classList.remove("check");

      dispatch({
        id: Math.random(),
        type: "LIKE",
        title: title,
        address: address,
        homeUrl: homeUrl,
        imgUrl: imgUrl,
      });

      dispatch({
        type: "REMOVE_UNLIKE",
        id: Math.random(),
        title: title,
      });
    } else if (target.classList.contains("check")) {
      target.classList.remove("check");

      dispatch({
        type: "REMOVE_LIKE",
        id: Math.random(),
        title: title,
      });
    }
  };

  const downHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const siblingTarget = target.previousSibling;
    const title =
      target.parentNode.parentNode.previousSibling.childNodes[0].innerText;
    const address =
      target.parentNode.parentNode.previousSibling.childNodes[1].innerText;
    const homeUrl =
      target.parentNode.parentNode.parentNode.parentNode.parentNode.href;
    const imgUrl = target.parentNode.parentNode.parentNode.previousSibling.src;
    setCount((prev) => prev + 1);

    if (!target.classList.contains("check")) {
      target.classList.add("check");
      siblingTarget.classList.remove("check");

      dispatch({
        type: "UNLIKE",
        id: Math.random(),
        title: title,
        address: address,
        homeUrl: homeUrl,
        imgUrl: imgUrl,
      });

      dispatch({
        type: "REMOVE_LIKE",
        id: Math.random(),
        title: title,
      });
    } else if (target.classList.contains("check")) {
      target.classList.remove("check");

      dispatch({
        type: "REMOVE_UNLIKE",
        id: Math.random(),
        title: title,
      });
    }
  };

  return (
    <Wrap>
      <InnerWrap>
        <Alert>'{value}' 검색 결과</Alert>
        <SearchSelect data={distanceData} />
        <CloseBtnWrap>
          <SearchCloseBtn />
        </CloseBtnWrap>
      </InnerWrap>
      <ConWrap>
        {campingValid ? (
          inputValid === 0 ? (
            <Message>
              검색 결과가 없습니다. 지역명이 맞는지 확인해주세요
            </Message>
          ) : (
            <Loading />
          )
        ) : inputValid === 0 ? (
          <Message>검색 결과가 없습니다. 지역명이 맞는지 확인해주세요</Message>
        ) : (
          <>
            {!campingData ? (
              <Message>주변에 캠핑장이 없습니다</Message>
            ) : (
              <>
                {campingData?.map((data, index) => (
                  <Link
                    key={data.contentId}
                    to={
                      data.homepage === ""
                        ? `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${data.facltNm}`
                        : data.homepage
                    }
                    target="_blank"
                  >
                    <Con>
                      <ConImg
                        src={data.firstImageUrl ? data.firstImageUrl : notImage}
                        alt={data.facltNm}
                      />
                      <ConInnerWrap>
                        <TextWrap>
                          <Title>{data.facltNm}</Title>
                          <Address>{data.addr1}</Address>
                        </TextWrap>
                        <BtnWrap>
                          <SortBtn title="바로가기">바로가기</SortBtn>
                          <IconWrap>
                            <Btn
                              className="upChecked"
                              onClick={upHandler}
                              title="좋아요"
                            >
                              {ups && (
                                <>
                                  {ups[index]?.classList.contains("check") ? (
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                  ) : (
                                    <FontAwesomeIcon icon={regularUp} />
                                  )}
                                </>
                              )}
                            </Btn>
                            <Btn
                              className="downChecked"
                              onClick={downHandler}
                              title="별로에요"
                            >
                              {downs && (
                                <>
                                  {downs[index]?.classList.contains("check") ? (
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                  ) : (
                                    <FontAwesomeIcon icon={regularDown} />
                                  )}
                                </>
                              )}
                            </Btn>
                          </IconWrap>
                        </BtnWrap>
                      </ConInnerWrap>
                    </Con>
                  </Link>
                ))}
              </>
            )}
          </>
        )}
      </ConWrap>
    </Wrap>
  );
};
