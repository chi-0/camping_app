import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 30px 10%;
  padding-bottom: 120px;
`;

export const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
