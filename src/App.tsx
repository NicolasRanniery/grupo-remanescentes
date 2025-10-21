import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import FacaParte from "./pages/FacaParte";
import QuemSomos from "./pages/QuemSomos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col overflow-auto">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/faca-parte" element={<FacaParte />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
    
    </div>
  );
}

export default App;
