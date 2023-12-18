import styled from "styled-components";
import { mainColor } from "../style/GlobalStyled";
import { Link } from "react-router-dom";

const HearderWrap = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  column-gap: 60px;
  align-items: center;

  > a {
    color: ${mainColor};
    font-size: 24px;
    font-weight: 700;
  }

  @media screen and (max-width: 800px) {
    column-gap: 40px;

    > a {
      font-size: 20px;
    }
  }
`;

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media screen and (max-width: 800px) {
    column-gap: 20px;
  }
`;

const Nav = styled.div`
  position: relative;

  > a {
    font-size: 18px;
    font-weight: 500;
  }

  > a:hover {
    ~ div {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    > a {
      font-size: 16px;
    }
  }
`;

const Line = styled.div`
  width: 0%;
  height: 2px;
  background-color: ${mainColor};
  position: absolute;
  bottom: -5px;
  left: 0;
  transition: 0.3s;
  border-radius: 50%;
`;

export const Header = () => {
  return (
    <HearderWrap>
      <Link to={"/"}>캠핑갈까?</Link>
      <NavWrap>
        <Nav>
          <Link to={"/search"}>캠핑장 찾기</Link>
          <Line />
        </Nav>
        <Nav>
          <Link to={"my_camping"}>나의 캠핑장</Link>
          <Line />
        </Nav>
      </NavWrap>
    </HearderWrap>
  );
};
