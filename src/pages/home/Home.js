import { Link } from "react-router-dom";
import styled from "styled-components";

const HearderWrap = styled.header`
  width: 100px;
  padding: 10px 80px;
`;

export const Home = () => {
  return (
    <div>
      <HearderWrap>
        <Link to={"/"}>캠핑갈까?</Link>
      </HearderWrap>
    </div>
  );
};
