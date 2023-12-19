import styled from "styled-components";
import { SearchMap } from "./SearchMap";
import { SearchCon } from "./SearchCon";
import { SearchModalHeader } from "./SearchModalHeader";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  position: fixed;
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
`;

const ModalWrap = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;

export const SearchModal = () => {
  return (
    <Wrap>
      <Modal>
        <SearchModalHeader />
        <ModalWrap>
          <SearchMap />
          <SearchCon />
        </ModalWrap>
      </Modal>
    </Wrap>
  );
};
