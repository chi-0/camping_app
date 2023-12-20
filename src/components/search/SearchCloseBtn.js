import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CloseBtn = styled.button`
  all: unset;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  font-size: 23px;
  position: absolute;
  top: 0;
  right: 7%;
`;

export const SearchCloseBtn = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({
      type: "CLOSE",
    });
  };

  return (
    <CloseBtn onClick={clickHandler}>
      <FontAwesomeIcon icon={faClose} />
    </CloseBtn>
  );
};
