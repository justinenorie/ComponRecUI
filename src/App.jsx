import { lazy, Suspense } from "react";
import Loading from "./pages/Loading";
import MainRoutes from "./routes/MainRoutes";

const TopBar = lazy(() => import("./components/navigations/TopBar"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <TopBar />
        <MainRoutes />
      </Suspense>
    </div>
  );
};

export default App;
