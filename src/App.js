import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components";
import Personaje from "./components/personaje";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/personaje/:id" element={<Personaje />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
