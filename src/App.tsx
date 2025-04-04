import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollRouter from "./components/ScrollRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ScrollRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
