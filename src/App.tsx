import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SaibaMais from "./pages/SaibaMais";
import Contato from "./pages/Contato";
import FacaParte from "./pages/FacaParte";


function App() {
  return (
    <div className="min-h-screen bg-[#e9ded2] text-gray-800 flex flex-col overflow-auto">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saiba-mais" element={<SaibaMais />} />
          <Route path="/faca-parte" element={<FacaParte />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
    </div>
  );
}

export default App;
