import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import QuemSomos from "./pages/QuemSomos";
import Erro404 from "./pages/Erro404";
import Reunioes from "./pages/Reunioes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col overflow-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/reunioes" element={<Reunioes />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
