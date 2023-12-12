import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";

const Con = styled.div`
  max-width: 385px;
  width: 100%;
  border: 2px solid #cacaca;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36.6% 30px;
  position: relative;

  &:hover {
    border: 2px solid ${mainColor};
  }

  > svg {
    font-size: 100px;
    color: ${mainColor};
  }
`;

const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  bottom: 10%;
  left: 0;
`;

export const HomeCon = ({ link, title, icon }) => {
  return (
    <Link to={link}>
      <Con>
        <FontAwesomeIcon icon={icon} />
        <Title>{title}</Title>
      </Con>
    </Link>
  );
};
