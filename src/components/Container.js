import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  padding: 30px 0;
  padding-bottom: 120px;

  @media screen and (max-width: 800px) {
    padding-bottom: 80px;
  }
`;

export const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
