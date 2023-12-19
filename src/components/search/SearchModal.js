import styled from "styled-components";
import { SearchMap } from "./SearchMap";
import { SearchCon } from "./SearchCon";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
`;

export const SearchModal = () => {
  return (
    <Wrap>
      <Modal>
        <SearchMap />
        <SearchCon />
      </Modal>
    </Wrap>
  );
};
