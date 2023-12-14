import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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

const NotPage = styled.p`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #cacaca;
`;

const Btn = styled.button`
  all: unset;
  font-size: 25px;
  color: ${mainColor};
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const MyCon = ({ data, icon, count }) => {
  const myConDispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const { iconName } = icon;
    const title = e.currentTarget.previousSibling.childNodes[0].innerText;

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
        <Card>
          <TextWrap>
            <Title>등록된 캠핑장이 없습니다.</Title>
          </TextWrap>
        </Card>
      ) : (
        <>
          {data?.map((data) => (
            <Link key={data.id} to={data.homeUrl} target="_blank">
              <Card>
                <Img src={data.url} />
                <TextWrap>
                  <Title>{data.title}</Title>
                  <Intro>{data.intro}</Intro>
                  <Address>{data.address}</Address>
                  {data.homeUrl.slice(0, 24) === `https://search.naver.com` && (
                    <>
                      <NotPage>🚫 제공받은 홈페이지가 없습니다</NotPage>
                    </>
                  )}
                </TextWrap>
                <Btn onClick={clickHandler}>
                  <FontAwesomeIcon icon={icon} />
                </Btn>
              </Card>
            </Link>
          ))}
        </>
      )}
    </Wrap>
  );
};
