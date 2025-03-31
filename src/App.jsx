import { lazy, Suspense } from "react";
import MainRoutes from "./routes/MainRoutes";

const TopBar = lazy(() => import("./components/navigations/TopBar"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <TopBar />
        <MainRoutes />
      </Suspense>
    </div>
  );
};

export default App;
