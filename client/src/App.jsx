import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import AllRoutes from "./routes/AllRoutes";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
    </>
  );
}

export default App;
