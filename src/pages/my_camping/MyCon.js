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
`;

const Card = styled.div`
  position: relative;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const TextWrap = styled.div`
  letter-spacing: -1px;
`;

const Title = styled.h3`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Address = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
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
                  <Address>{data.address}</Address>
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
