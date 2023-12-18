import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown as regularThumbsDown,
  faThumbsUp as regularThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const Wrap = styled.div`
  display: ${(props) => props.$display};
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 570px;
  padding: 5px;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    row-gap: 10px;
    height: auto;
    overflow: visible;
  }
`;

const Card = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  height: fit-content;
  position: relative;
  /* background-color: rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 10px;
    align-items: flex-start;
  }
`;

const Img = styled.img`
  width: 148px;
  height: 148px;
  margin-right: 35px;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    margin-right: 15px;
    width: 98px;
    height: 130px;
  }
`;

const TextWrap = styled.div`
  letter-spacing: -1px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-top: 5px;
  }
`;

const Intro = styled.p`
  font-size: 15px;
  font-weight: 600;
  opacity: 0.3;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

const Address = styled.p`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

const NotPage = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #cacaca;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  column-gap: 15px;

  @media screen and (max-width: 800px) {
    bottom: -90px;
    right: 10px;
    column-gap: 10px;
  }
`;

const Btn = styled.button`
  all: unset;
  font-size: 25px;
  color: #cacaca;

  &:hover {
    color: ${mainColor};
  }

  &.btnColor {
    color: ${mainColor};
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const SearchCard = ({ data }) => {
  const [count, setCount] = useState(0);
  const [isBtn, setIsBtn] = useState(0);
  const btnRef = useRef();
  const { current } = btnRef;

  const arrDispatch = useDispatch();

  useEffect(() => {
    setIsBtn(current);
  }, [current, count]);

  const likeHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const childTarget = e.currentTarget.parentNode.childNodes[1];
    const targetValid = target.classList.contains("btnColor");
    setCount((prev) => prev + 1);

    const imgSrc = e.currentTarget.parentNode.parentNode.childNodes[0].src;
    const title =
      e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[0]
        .innerText;
    const intro =
      e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[1]
        .innerText;
    const address =
      e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[2]
        .innerText;
    const homeUrl = e.currentTarget.parentNode.parentNode.parentNode.href;

    if (!targetValid) {
      target.classList.add("btnColor");
      childTarget.classList.remove("btnColor");
      arrDispatch({
        type: "LIKE",
        id: Math.random(),
        url: imgSrc,
        title: title,
        intro: intro,
        address: address,
        homeUrl: homeUrl,
      });
      arrDispatch({
        type: "REMOVE_UNLIKE",
        id: Math.random(),
        title: title,
      });
    } else if (targetValid) {
      target.classList.remove("btnColor");
      arrDispatch({
        type: "REMOVE_LIKE",
        id: Math.random(),
        title: title,
      });
    }
  };

  const unlikeHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const childTarget = e.currentTarget.parentNode.childNodes[0];
    const targetValid = target.classList.contains("btnColor");
    setCount((prev) => prev + 1);

    const imgSrc = e.currentTarget.parentNode.parentNode.childNodes[0].src;
    const title =
      e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[0]
        .innerText;
    const intro =
      e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[1]
        .innerText;
    const address =
      e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[2]
        .innerText;
    const homeUrl = e.currentTarget.parentNode.parentNode.parentNode.href;

    if (!targetValid) {
      target.classList.add("btnColor");
      childTarget.classList.remove("btnColor");
      arrDispatch({
        type: "UNLIKE",
        id: Math.random(),
        url: imgSrc,
        title: title,
        intro: intro,
        address: address,
        homeUrl: homeUrl,
      });
      arrDispatch({
        type: "REMOVE_LIKE",
        id: Math.random(),
        title: title,
      });
    } else if (targetValid) {
      target.classList.remove("btnColor");
      arrDispatch({
        type: "REMOVE_UNLIKE",
        id: Math.random(),
        title: title,
      });
    }
  };

  return (
    <>
      <Wrap ref={btnRef} $display={data === "" ? "none" : "flex"}>
        {data && (
          <>
            {data?.map((data, index) => (
              <Link
                key={data.contentId}
                to={
                  data.homepage === ""
                    ? `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${data.facltNm}`
                    : data.homepage
                }
                target="_blank"
              >
                <Card>
                  <Img
                    src={
                      data.firstImageUrl
                        ? data.firstImageUrl
                        : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
                    }
                    alt={data.facltNm}
                  />
                  <TextWrap>
                    <Title>{data.facltNm}</Title>
                    <Intro>{data.lineIntro}</Intro>
                    <Address>✔️ {data.addr1}</Address>
                    {data.homepage === "" && (
                      <>
                        <NotPage>🚫 제공받은 홈페이지가 없습니다</NotPage>
                      </>
                    )}
                  </TextWrap>
                  <BtnWrap>
                    <Btn onClick={likeHandler}>
                      {isBtn && (
                        <>
                          {isBtn?.childNodes[
                            index
                          ]?.childNodes[0].childNodes[2].childNodes[0].classList.contains(
                            "btnColor"
                          ) ? (
                            <>
                              <FontAwesomeIcon icon={faThumbsUp} />
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={regularThumbsUp} />
                            </>
                          )}
                        </>
                      )}
                    </Btn>
                    <Btn onClick={unlikeHandler}>
                      {isBtn && (
                        <>
                          {isBtn?.childNodes[
                            index
                          ]?.childNodes[0].childNodes[2].childNodes[1].classList.contains(
                            "btnColor"
                          ) ? (
                            <>
                              <FontAwesomeIcon icon={faThumbsDown} />
                            </>
                          ) : (
                            <>
                              <FontAwesomeIcon icon={regularThumbsDown} />
                            </>
                          )}
                        </>
                      )}
                    </Btn>
                  </BtnWrap>
                </Card>
              </Link>
            ))}
          </>
        )}
      </Wrap>
    </>
  );
};
