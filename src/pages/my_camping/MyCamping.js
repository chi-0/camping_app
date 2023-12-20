import styled from "styled-components";
import { Container } from "../../components/Container";
import { MyCon } from "./MyCon";
import { useState } from "react";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { HomeBg } from "../home/HomeBg";

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 90px;
`;

const BtnWrap = styled.div`
  width: 100%;
  border-bottom: 2px solid #dcdcdc;
  padding: 5px;
  display: flex;
  column-gap: 20px;
`;

const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #cacaca;
  padding: 5px;

  &:nth-child(1) {
    color: ${(props) => props.$color};
  }
  &:nth-child(2) {
    color: ${(props) => props.$color};
  }
`;

export const MyCamping = () => {
  const [LikeColor, setLikeColor] = useState("#111");
  const [unLikeColor, setUnLikeColor] = useState("#cacaca");
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const likeArr = useSelector((state) => state.arrReducer[0]);
  const unLikeArr = useSelector((state) => state.arrReducer[1]);

  const likeHandler = () => {
    setUnLikeColor("#cacaca");
    setLikeColor("#111");
    setNum(0);
  };

  const unLikeHandler = () => {
    setUnLikeColor("#111");
    setLikeColor("#cacaca");
    setNum(1);
  };

  const counting = (countNum) => {
    setCount((prev) => prev + countNum);

    return count;
  };

  return (
    <Container>
      <HomeBg />
      <Wrap>
        <BtnWrap>
          <Btn onClick={likeHandler} $color={LikeColor}>
            좋아요
          </Btn>
          <Btn onClick={unLikeHandler} $color={unLikeColor}>
            별로에요
          </Btn>
        </BtnWrap>
        {num === 0 ? (
          <MyCon data={likeArr} icon={faThumbsUp} count={counting} />
        ) : (
          <MyCon data={unLikeArr} icon={faThumbsDown} count={counting} />
        )}
      </Wrap>
    </Container>
  );
};
