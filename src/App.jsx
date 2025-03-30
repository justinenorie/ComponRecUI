import { Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const ButtonPage = lazy(() => import("./pages/actions/ButtonPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/action/button" element={<ButtonPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
