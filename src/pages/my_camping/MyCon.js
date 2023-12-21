import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const Card = styled.div`
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;

  &:hover .hoverBg {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 800px) {
    height: 180px;
  }
`;

const TextWrap = styled.div`
  letter-spacing: -1px;
  padding: 15px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

const Address = styled.p`
  font-size: 15px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

const Btn = styled.button`
  all: unset;
  font-size: 20px;
  color: ${mainColor};
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  position: relative;
  left: 90%;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const MyCon = ({ data, icon, count }) => {
  const myConDispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const { iconName } = icon;
    const title = e.currentTarget.previousSibling.previousSibling.innerText;
    console.log(title);

    if (iconName === "thumbs-up") {
      myConDispatch({
        type: "REMOVE_LIKE",
        id: Math.random(),
        title: title,
      });
      count(1);
    } else if (iconName === "thumbs-down") {
      myConDispatch({
        type: "REMOVE_UNLIKE",
        id: Math.random(),
        title: title,
      });
      count(1);
    }
  };

  return (
    <Wrap>
      {data.length === 0 ? (
        <TextWrap>
          <Title>등록된 캠핑장이 없습니다.</Title>
        </TextWrap>
      ) : (
        <>
          {data?.map((data) => (
            <Link key={data.id} to={data.homeUrl} target="_blank">
              <Card>
                <Img src={data.imgUrl} alt={data.title} />
                <TextWrap>
                  <Title>{data.title}</Title>
                  <Address>{data.address.slice(0, 15) + "..."}</Address>
                  <Btn onClick={clickHandler} title="삭제">
                    <FontAwesomeIcon icon={icon} />
                  </Btn>
                </TextWrap>
              </Card>
            </Link>
          ))}
        </>
      )}
    </Wrap>
  );
};
