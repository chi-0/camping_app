import styled from "styled-components";
import { mainColor } from "../style/GlobalStyled";
import { Link } from "react-router-dom";

const HearderWrap = styled.header`
  width: 100%;
  padding: 15px 10%;
  font-family: "EF_jejudoldam";
  font-size: 24px;

  > a {
    color: ${mainColor};
  }

  @font-face {
    font-family: "EF_jejudoldam";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2")
      format("woff2");
  }
`;

export const Header = () => {
  return (
    <HearderWrap>
      <Link to={"/"}>캠핑갈까?</Link>
    </HearderWrap>
  );
};
