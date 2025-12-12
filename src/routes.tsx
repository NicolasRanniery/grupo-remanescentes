// routes.tsx
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/ui/Headers/Header";
import Footer from "./components/Footers/Footer";
import Home from "./pages/Homes/Home";
import QuemSomos from "./pages/QuemSomos";
import Reunioes from "./pages/Reunioes";
import Contato from "./pages/Contato";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";
import HomeUFPA from "./pages/Homes/HomeUFPA";
import HeaderUFPA from "./components/ui/Headers/HeaderUFPA";
import FooterUFPA from "./components/Footers/FooterUFPA";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer ano_inicial={2019} titulo="União Remanescentes" />
    </>
  );
}

function LayoutUFPA() {
  return (
    <>
      <HeaderUFPA/>
      <Outlet />
      <FooterUFPA ano_inicial={2019} titulo="Remanescentes UFPA" />
    </>
  );
}

export default function RoutesPath() {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col overflow-auto">
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<NotFound />}>
          <Route index element={<Home />} errorElement={<NotFound />} />
          <Route
            path="quem-somos"
            element={<QuemSomos />}
            errorElement={<NotFound />}
          />
          <Route
            path="reunioes"
            element={<Reunioes />}
            errorElement={<NotFound />}
          />
          <Route
            path="contato"
            element={<Contato />}
            errorElement={<NotFound />}
          />
          <Route
            path="galeria"
            element={<Galeria />}
            errorElement={<NotFound />}
          />
        </Route>

        <Route
          path="/ufpa"
          element={<LayoutUFPA />}
          errorElement={<NotFound />}
        >
          <Route index element={<HomeUFPA />} />

        </Route>
      <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
