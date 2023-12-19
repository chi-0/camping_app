import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 20px;
`;

const CloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 23px;
`;

export const SearchModalHeader = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({
      type: "CLOSE",
    });
  };

  return (
    <Header>
      <CloseBtn onClick={clickHandler}>
        <FontAwesomeIcon icon={faClose} />
      </CloseBtn>
    </Header>
  );
};
