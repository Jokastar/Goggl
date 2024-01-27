import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/movies" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
    </Routes>
  );
}

export default AppRoutes;