import { Container } from "../../components/Container";
import { useSelector } from "react-redux";
import { HomeBg } from "./HomeBg";
import { HomePopular } from "./HomePopular";
import { SearchModal } from "../../components/search/SearchModal";

export const Home = () => {
  const modalValid = useSelector((state) => state.modalReducer);

  return (
    <>
      <Container>
        <HomeBg />
        <HomePopular />
      </Container>
      {modalValid && <SearchModal />}
    </>
  );
};
