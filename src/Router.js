import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { MyCamping } from "./pages/my_camping/MyCamping";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";
import { GlobalStyled } from "./style/GlobalStyled";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/search/SearchModal";
import { useSelector } from "react-redux";

export const Router = () => {
  const modalValid = useSelector((state) => state.modalReducer);

  return (
    <HashRouter>
      <GlobalStyled />

      <Header />

      {modalValid && <SearchModal />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_camping" element={<MyCamping />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};
