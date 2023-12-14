import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown as regularThumbsDown,
  faThumbsUp as regularThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
// import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 570px;
  padding: 5px;
  overflow-y: scroll;
`;

const Card = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  height: fit-content;
  position: relative;

  &:hover {
    border: 2px solid ${mainColor};
  }
`;

const Img = styled.img`
  width: 148px;
  height: 148px;
  margin-right: 35px;
`;

const TextWrap = styled.div`
  letter-spacing: -1px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Intro = styled.p`
  font-size: 15px;
  font-weight: 600;
  opacity: 0.3;
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const NotPage = styled.p`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #cacaca;
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  column-gap: 15px;
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
`;

export const SearchTest = ({ data }) => {
  const [isLike, setIsLike] = useState(false);

  const likeHandler = (e) => {
    e.preventDefault();

    if (!isLike) {
      setIsLike(true);
    } else if (isLike) {
      setIsLike(false);
    }
    console.log(isLike);
  };

  const unlikeHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrap>
        {data.map((data, index) => (
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
              <Img src={data.firstImageUrl} />
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
                  {!isLike ? (
                    <FontAwesomeIcon icon={regularThumbsUp} />
                  ) : (
                    <FontAwesomeIcon icon={regularThumbsDown} />
                  )}
                </Btn>
                <Btn onClick={unlikeHandler}>
                  <FontAwesomeIcon icon={regularThumbsDown} />
                </Btn>
              </BtnWrap>
            </Card>
          </Link>
        ))}
      </Wrap>
    </>
  );
};
