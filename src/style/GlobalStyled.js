import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = "#5fcc29";

export const GlobalStyled = createGlobalStyle`
  ${reset}

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: white;
  width: 100%;
  color: #111;
  font-family: 'Noto Sans KR', sans-serif;
 }

 ul,ol,li {
  list-style: none;
 }

 a {
  text-decoration: none;
  color: #111;
 }
`;
