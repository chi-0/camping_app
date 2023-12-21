import { BounceLoader } from "react-spinners";
import { mainColor } from "../style/GlobalStyled";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 30vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <BounceLoader color={mainColor} size={50} />
    </Wrap>
  );
};
