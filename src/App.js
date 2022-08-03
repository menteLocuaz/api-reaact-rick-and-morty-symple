import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components";
import Personaje from "./components/personaje";

function App() {
  return (
    <div className="py-6 px-16 justify-items-center container mx-auto px-4">
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
