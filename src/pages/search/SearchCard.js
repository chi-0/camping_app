import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 570px;
  overflow-y: scroll;
`;

const Card = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  height: fit-content;
`;

const Img = styled.img`
  width: 148px;
  height: 148px;
  margin-right: 35px;
`;

const TextWrap = styled.div`
  letter-spacing: -1px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Intro = styled.p`
  font-size: 15px;
  font-weight: 600;
  opacity: 0.3;
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const SearchCard = ({ data }) => {
  return (
    <>
      <Wrap>
        {data.map((data) => (
          <Link key={data.contentId} to={data.homepage} target="_blank">
            <Card>
              <Img src={data.firstImageUrl} />
              <TextWrap>
                <Title>{data.facltNm}</Title>
                <Intro>{data.lineIntro}</Intro>
                <Address>{data.addr1}</Address>
              </TextWrap>
            </Card>
          </Link>
        ))}
      </Wrap>
    </>
  );
};
