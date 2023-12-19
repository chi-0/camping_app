import styled from "styled-components";

const Wrap = styled.div`
  padding: 90px 2%;
  width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  width: 350px;
  height: 350px;
  background-color: beige;
  border-radius: 10px;
`;

export const HomePopular = () => {
  return (
    <Wrap>
      <Title>금주의 인기 캠핑장</Title>
      <ConWrap>
        <Con></Con>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </Wrap>
  );
};
