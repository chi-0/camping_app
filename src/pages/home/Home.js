import { Container } from "../../components/Container";
import { useCurrentLocation } from "../../lib/useCurrentLocation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { HomeBg } from "./HomeBg";
import { HomePopular } from "./HomePopular";
import { SearchModal } from "../../components/search/SearchModal";

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
    <>
      <Container>
        <HomeBg />
        <HomePopular />
      </Container>
      <SearchModal />
    </>
  );
};
