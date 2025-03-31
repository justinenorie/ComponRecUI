import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
import ActionRoutes from "./ActionRoutes";

const NotFound = lazy(() => import("../pages/NotFound"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/action/*" element={<ActionRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
