import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const actionComponents = [
  {
    path: "button",
    component: lazy(() => import("../pages/actions/ButtonPage")),
  },
  {
    path: "modal",
    component: lazy(() => import("../pages/actions/ModalPage")),
  },
  {
    path: "switch",
    component: lazy(() => import("../pages/actions/SwitchPage")),
  },
];

const ActionRoutes = () => {
  return (
    <Routes>
      {actionComponents.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default ActionRoutes;
