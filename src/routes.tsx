// routes.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Reunioes from "./pages/Reunioes";
import Contato from "./pages/Contato";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";

export default function RoutesPath() {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col overflow-auto">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<NotFound />}
        />

        <Route
          path="/quem-somos"
          element={<QuemSomos />}
          errorElement={<NotFound />}
        />

        <Route
          path="/reunioes"
          element={<Reunioes />}
          errorElement={<NotFound />}
        />

        <Route
          path="/contato"
          element={<Contato />}
          errorElement={<NotFound />}
        />

        <Route
          path="/galeria"
          element={<Galeria />}
          errorElement={<NotFound />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
