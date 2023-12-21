import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 90px 2%;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding: 60px 5%;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
`;

const Con = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const ConName = styled.h4`
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const HomePopular = ({ data }) => {
  return (
    <Wrap>
      <Title>금주의 인기 캠핑장</Title>
      <ConWrap>
        {data.slice(0, 3)?.map((data) => (
          <Link key={data.contentId} to={data.homepage} target="_blank">
            <Con src={data.firstImageUrl} alt={data.facltNm} />
            <ConName>{data.facltNm}</ConName>
          </Link>
        ))}
      </ConWrap>
    </Wrap>
  );
};
