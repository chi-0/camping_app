import styled from "styled-components";

const ConWrap = styled.div`
  width: 40%;
  background-color: aliceblue;
  border-radius: 10px;
`;

const Con = styled.div`
  width: 100%;
  display: flex;
`;

const ConImg = styled.image`
  width: 130px;
  height: 90px;
  background-color: pink;
`;

const ConInnerWrap = styled.div``;

const TextWrap = styled.div``;

const Title = styled.div``;

const Intro = styled.div``;

const Address = styled.div``;

const MoreBtn = styled.div``;

export const SearchCon = () => {
  return (
    <ConWrap>
      <Con>
        <ConImg />
        <ConInnerWrap>
          <TextWrap>
            <Title></Title>
            <Intro></Intro>
            <Address></Address>
          </TextWrap>
          <MoreBtn>더보기</MoreBtn>
        </ConInnerWrap>
      </Con>
    </ConWrap>
  );
};
