import styled from "styled-components";
import bgImg from "./img/camping3.jpg";
import { BannerForm } from "./BannerForm";

const MainBg = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImg}) no-repeat center / cover;
  transform: rotateY(180deg);
`;

export const Banner = () => {
  return (
    <MainBg>
      <BannerForm />
    </MainBg>
  );
};
