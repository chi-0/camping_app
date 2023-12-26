import styled from "styled-components";
import { mainColor } from "../style/GlobalStyled";
import { Link } from "react-router-dom";

const HearderWrap = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  > a {
    font-weight: 700;
  }

  @media screen and (max-width: 800px) {
    > a {
      font-size: 14px;
    }
  }
`;

export const Header = () => {
  return (
    <HearderWrap>
      <Link to={"/"}>캠핑갈까</Link>
      <NavWrap>
        <Nav>
          <Link to={"my_camping"}>나의 캠핑장</Link>
        </Nav>
      </NavWrap>
    </HearderWrap>
  );
};
