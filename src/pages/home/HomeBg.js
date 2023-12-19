import styled from "styled-components";
import { SearchForm } from "../../components/SearchForm";

const MainBg = styled.div`
  width: 100%;
  height: 60vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBg = () => {
  return (
    <MainBg>
      <SearchForm />
    </MainBg>
  );
};
