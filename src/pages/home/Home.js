import { Container } from "../../components/Container";
import { HomeBg } from "./HomeBg";
import { HomePopular } from "./HomePopular";

export const Home = () => {
  return (
    <>
      <Container>
        <HomeBg />
        <HomePopular />
      </Container>
    </>
  );
};
