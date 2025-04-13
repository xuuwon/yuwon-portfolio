import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollRouter from "./components/ScrollRouter";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/" element={<ScrollRouter />} />
        <Route path="/aboutMe" element={<ScrollRouter />} />
        <Route path="/project" element={<ScrollRouter />} />
        <Route path="/experience" element={<ScrollRouter />} />
        <Route path="/contact" element={<ScrollRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
