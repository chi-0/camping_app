import styled from "styled-components";
import { Container } from "../../components/Container";
import bgImg from "./img/camping.png";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 640px;
    width: 100%;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 800px) {
    > img {
      margin-bottom: 20px;
    }
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Wrap>
        <img src={bgImg} alt="pageNotFound" />
        <Title>찾을 수 없는 페이지입니다.</Title>
      </Wrap>
    </Container>
  );
};
