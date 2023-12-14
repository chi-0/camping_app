import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Card = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  height: fit-content;
  position: relative;
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

const Btn = styled.button`
  all: unset;
  font-size: 25px;
  color: ${mainColor};
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const MyCon = ({ data, icon }) => {
  return (
    <Wrap>
      {data?.map((data) => (
        <Card key={data.id}>
          <Img src={data.url} />
          <TextWrap>
            <Title>{data.title}</Title>
            <Intro>{data.intro}</Intro>
            <Address>{data.address}</Address>
          </TextWrap>
          <Btn>
            <FontAwesomeIcon icon={icon} />
          </Btn>
        </Card>
      ))}
    </Wrap>
  );
};
