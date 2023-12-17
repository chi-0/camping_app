import styled from "styled-components";
import { Container } from "../../components/Container";

import { faCampground, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { HomeCon } from "./HomeCon";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;

  > a {
    max-width: 385px;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 800px) {
    column-gap: 20px;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const { address } = useCurrentLocation();

  useEffect(() => {
    dispatch({
      type: "SEARCH_INPUT",
      value: address,
    });
  }, [address, dispatch]);

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
