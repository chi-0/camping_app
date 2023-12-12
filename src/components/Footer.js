import styled from "styled-components";

const FooterWrap = styled.footer`
  width: 100%;
  padding: 60px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.4);

  p {
    opacity: 0.4;
  }
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <p>© 2023 CHI-0 PROJECT</p>
    </FooterWrap>
  );
};
