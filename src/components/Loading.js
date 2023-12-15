import styled from "styled-components";

const Wrap = styled.div`
  display: ${(props) => props.$display};
  width: 600px;
  height: 600px;
`;

export const Loading = ({ alert }) => {
  return (
    <Wrap $display={alert ? "block" : "none"}>
      <p>{alert}</p>
    </Wrap>
  );
};
