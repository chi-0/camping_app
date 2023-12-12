import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 160px 10%;
`;

export const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
