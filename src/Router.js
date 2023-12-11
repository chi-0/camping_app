import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { MyCamping } from "./pages/my_camping/MyCamping";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my_camping" element={<MyCamping />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};
