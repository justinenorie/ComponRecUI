import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const CategoryPage = lazy(() => import("../pages/CategoryPage"));

const CategoryRoutes = () => {
  return (
    <Routes>
      <Route path="/:componentName" element={<CategoryPage />} />
    </Routes>
  );
};

export default CategoryRoutes;
