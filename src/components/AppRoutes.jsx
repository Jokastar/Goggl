import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

function AppRoutes({searchTerm, type}) {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/websearch" />} />
        <Route path="/websearch" element={<Results searchTerm={searchTerm} type={type} />} />
        <Route path="/videosearch" element={<Results searchTerm={searchTerm} type={type} />} />
        <Route path="/imagesearch" element={<Results searchTerm={searchTerm} type={type} />} />
    </Routes>
  );
}

export default AppRoutes;