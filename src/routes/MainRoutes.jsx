import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home";
import CategoryRoutes from "./CategoryRoutes";

const NotFound = lazy(() => import("../pages/NotFound"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/*" element={<CategoryRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
