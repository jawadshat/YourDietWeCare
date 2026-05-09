import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./landing.css";
import HomePage from "./pages/HomePage";
import PcosPage from "./pages/PcosPage";
import WeightLossPage from "./pages/WeightLossPage";
import SkinPage from "./pages/SkinPage";
import NutraceuticalsPage from "./pages/NutraceuticalsPage";
import { specialtyMeta } from "./data/specialties";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={specialtyMeta.pcos.path} element={<PcosPage />} />
        <Route path={specialtyMeta.weight.path} element={<WeightLossPage />} />
        <Route path={specialtyMeta.skin.path} element={<SkinPage />} />
        <Route path={specialtyMeta.nutraceuticals.path} element={<NutraceuticalsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
