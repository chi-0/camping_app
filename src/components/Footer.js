import styled from "styled-components";

const FooterWrap = styled.footer`
  width: 100%;
  padding: 60px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.4);

  p {
    opacity: 0.4;
  }

  @media screen and (max-width: 800px) {
    padding: 40px 5%;

    > p {
      font-size: 13px;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <p>© 2023 CHI-0 PROJECT</p>
    </FooterWrap>
  );
};
