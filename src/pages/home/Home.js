import styled from "styled-components";
import { Container } from "../../components/Container";

import { faCampground, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { HomeCon } from "./HomeCon";

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
`;

export const Home = () => {
  return (
    <Container>
      <ConWrap>
        <HomeCon
          link={"/search"}
          title={"내 주변 캠핑장 찾기"}
          icon={faLocationDot}
        />
        <HomeCon link={"/my_camping"} title={"나의 캠핑"} icon={faCampground} />
      </ConWrap>
    </Container>
  );
};
