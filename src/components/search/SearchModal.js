import styled from "styled-components";
import { SearchMap } from "./SearchMap";
import { SearchCon } from "./SearchCon";
import { useState } from "react";

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
  z-index: 99;
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
  padding-top: 40px;
  height: 100%;
`;

export const SearchModal = () => {
  const [isCampingData, setIsCampingData] = useState();

  const getData = (data) => {
    setIsCampingData(data);
  };

  return (
    <Wrap>
      <Modal>
        <ModalWrap>
          <SearchMap getData={isCampingData} />
          <SearchCon getData={getData} />
        </ModalWrap>
      </Modal>
    </Wrap>
  );
};
