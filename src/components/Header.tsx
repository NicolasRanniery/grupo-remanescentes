import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
// import MenuResponsivo from "./MenuResponsivo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-[#535353] to-[#292929] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <h1 className="text-base sm:text-xl font-bold text-[#cdad7d] font-texgyretermes">
          <Link to="/" aria-label="Voltar para a página inicial" className="flex items-center gap-3 sm:gap-5">
            <img
              src="/assets/uniao-remanescentes.png"
              alt="Logo Remanescentes"
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full"
            />
          <span className="hidden md:inline text-3xl">União Remanescentes</span>
          </Link>
        </h1>

        <div className="flex items-center flex-wrap gap-2 sm:gap-4 md:gap-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base text-[#cdad7d] font-quicksand font-bold"
          >
            INÍCIO
          </Link>
          <Link
            to="/faca-parte"
            className="hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base text-[#cdad7d] font-quicksand font-bold"
          >
            FAÇA PARTE
          </Link>
          <Link
            to="/quem-somos"
            className="hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base text-[#cdad7d] font-quicksand font-bold"
          >
            QUEM SOMOS
          </Link>
          <Link
            to="/contato"
            className="hover:text-blue-400 transition-colors text-xs sm:text-sm md:text-base text-[#cdad7d] font-quicksand font-bold"
          >
            CONTATO
          </Link>
          <div onClick={()=>setOpen(!open)}>
            <Menu className="md:hidden" />
          </div>
        </div>
        {/* <MenuResponsivo /> */}
      </div>
    </nav>
  );
}
