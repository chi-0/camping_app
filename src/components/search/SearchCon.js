import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { SearchSelect } from "./SearchSelect";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCamping } from "../../api";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown as regularDown,
  faThumbsUp as regularUp,
} from "@fortawesome/free-regular-svg-icons";

import notImage from "./img/notImage.jpg";
import { Link } from "react-router-dom";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  padding-left: 20px;
  letter-spacing: -1px;
`;

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 5%;
`;

const Alert = styled.h3`
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
`;

const ConWrap = styled.div`
  width: 100%;
  height: 93%;
  overflow-y: scroll;
`;

const Con = styled.div`
  width: 100%;
  display: flex;
  column-gap: 15px;
  border-bottom: 1px solid #dcdcdc;
  padding: 8px;
`;

const ConImg = styled.img`
  width: 160px;
  height: 160px;
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
`;

const Address = styled.span`
  font-size: 15px;
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    font-size: 14px;
    font-weight: 500;
    color: ${mainColor};
  }
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

export const SearchCon = () => {
  const [distance, setDistance] = useState(5000);
  const [ups, setUps] = useState();
  const [downs, setDowns] = useState();
  const [count, setCount] = useState(0);

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
  }, [campingData, count]);

  const upHandler = (e) => {
    const target = e.currentTarget;
    const siblingTarget = target.nextSibling;
    setCount((prev) => prev + 1);

    if (!target.classList.contains("check")) {
      target.classList.add("check");
      siblingTarget.classList.remove("check");
    } else if (target.classList.contains("check")) {
      target.classList.remove("check");
    }
  };

  const downHandler = (e) => {
    const target = e.currentTarget;
    const siblingTarget = target.previousSibling;
    setCount((prev) => prev + 1);

    if (!target.classList.contains("check")) {
      target.classList.add("check");
      siblingTarget.classList.remove("check");
    } else if (target.classList.contains("check")) {
      target.classList.remove("check");
    }
  };

  return (
    <Wrap>
      <InnerWrap>
        <Alert>'{value}' 검색 결과</Alert>
        <SearchSelect data={distanceData} />
      </InnerWrap>
      <ConWrap>
        {campingValid ? (
          inputValid === 0 ? (
            "검색 결과가 없습니다. 지역명이 맞는지 확인해주세요"
          ) : (
            "loading"
          )
        ) : inputValid === 0 ? (
          "검색 결과가 없습니다. 지역명이 맞는지 확인해주세요"
        ) : (
          <>
            {campingData?.map((data, index) => (
              <Con key={data.contentId}>
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
                    <Link
                      to={
                        data.homepage === ""
                          ? `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${data.facltNm}`
                          : data.homepage
                      }
                      target="_blank"
                    >
                      바로가기
                    </Link>
                    <IconWrap>
                      <Btn className="upChecked" onClick={upHandler}>
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
                      <Btn className="downChecked" onClick={downHandler}>
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
            ))}
          </>
        )}
      </ConWrap>
    </Wrap>
  );
};
