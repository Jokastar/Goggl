import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

function AppRoutes({searchTerm}) {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/websearch" />} />
        <Route path="/websearch" element={<Results searchTerm={searchTerm} />} />
        <Route path="/videosearch" element={<Results searchTerm={searchTerm} />} />
        <Route path="/imagesearch" element={<Results searchTerm={searchTerm} />} />
    </Routes>
  );
}

export default AppRoutes;