import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColor = "#5fcc29";

const GlobalStyle = createGlobalStyle`

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
  overflow: ${(props) => props.$overflow};
 }

 ul,ol,li {
  list-style: none;
 }

 a {
  text-decoration: none;
  color: #111;
 }

 input, select, textarea, button, a, label {
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
`;

export const GlobalStyled = () => {
  const modalValid = useSelector((state) => state.modalReducer);

  return (
    <>
      <GlobalStyle $overflow={modalValid ? "hidden" : "visible"} />
    </>
  );
};
