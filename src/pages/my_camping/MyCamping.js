import styled from "styled-components";
import { Container } from "../../components/Container";
import { MyCon } from "./MyCon";
import { useState } from "react";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 40px;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 160px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #acacac;
  font-size: 18px;
  font-weight: 500;

  &:nth-child(1) {
    background-color: ${(props) => props.$BgColor};
  }

  &:nth-child(2) {
    background-color: ${(props) => props.$BgColor};
  }
`;

export const MyCamping = () => {
  const [LikeColor, setLikeColor] = useState("rgba(95, 204, 41, 0.6)");
  const [unLikeColor, setUnLikeColor] = useState("white");
  const [num, setNum] = useState(0);

  const likeHandler = () => {
    setUnLikeColor("white");
    setLikeColor("rgba(95, 204, 41, 0.6)");
    setNum(0);
  };

  const unLikeHandler = () => {
    setUnLikeColor("rgba(95, 204, 41, 0.6)");
    setLikeColor("white");
    setNum(1);
  };

  return (
    <Container>
      <Wrap>
        <BtnWrap>
          <Btn onClick={likeHandler} $BgColor={LikeColor}>
            좋아요
          </Btn>
          <Btn onClick={unLikeHandler} $BgColor={unLikeColor}>
            별로에요
          </Btn>
        </BtnWrap>
        {num === 0 ? (
          <MyCon icon={faThumbsUp} />
        ) : (
          <MyCon icon={faThumbsDown} />
        )}
      </Wrap>
    </Container>
  );
};
