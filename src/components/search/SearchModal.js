import styled from "styled-components";
import { SearchMap } from "./SearchMap";
import { SearchCon } from "./SearchCon";
import { useState } from "react";
import { SearchCloseBtn } from "./SearchCloseBtn";

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

  @media screen and (max-width: 800px) {
    align-items: end;
  }
`;

const Modal = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    padding: 50px 10px 0;
    position: relative;
  }

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 85vh;
    animation: modal_action 0.2s ease;

    @keyframes modal_action {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
`;

const BtnWrap = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 40px;
  }
`;

const ModalWrap = styled.div`
  display: flex;
  width: 100%;
  padding-top: 40px;
  height: 100%;

  @media screen and (max-width: 1000px) {
    display: block;
    overflow-y: scroll;
    height: 92%;
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    height: 82%;
  }
`;

export const SearchModal = () => {
  const [isCampingData, setIsCampingData] = useState();

  const getData = (data) => {
    setIsCampingData(data);
  };

  return (
    <Wrap>
      <Modal>
        <BtnWrap>
          <SearchCloseBtn />
        </BtnWrap>
        <ModalWrap>
          <SearchMap getData={isCampingData} />
          <SearchCon getData={getData} />
        </ModalWrap>
      </Modal>
    </Wrap>
  );
};
