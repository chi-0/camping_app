import styled from "styled-components";

const Wrap = styled.div`
  display: ${(props) => props.$display};
  width: 600px;
  height: 600px;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 10px;
    align-items: flex-start;
  }
`;

export const Loading = ({ alert }) => {
  return (
    <Wrap $display={alert ? "block" : "none"}>
      <p>{alert}</p>
    </Wrap>
  );
};
