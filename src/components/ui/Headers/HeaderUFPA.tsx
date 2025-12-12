import { Link } from "react-router-dom";
import { Menu, ArrowLeft } from "lucide-react"; // Adicionei o ArrowLeft
import { useState } from "react";
import MenuResponsivo from "../../MenuResponsivo";

export default function HeaderUFPA() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-[#6dd7da] to-[#5ce1e6] text-white sticky top-0 z-50 h-20 sm:h-24 md:h-28 flex items-center transition-all duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        
        {/* LADO ESQUERDO: Botão Voltar + Logo */}
        <div className="flex items-center gap-3 sm:gap-6">
          
          {/* BOTÃO DE VOLTAR AO PORTAL GERAL */}
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#0d1a1a]/10 hover:bg-[#0d1a1a]/20 text-[#0d1a1a] px-3 py-2 rounded-lg transition-colors duration-200"
            title="Voltar para a Página Principal"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            {/* Texto só aparece em telas maiores que mobile (sm) */}
            <span className="hidden sm:inline font-quicksand font-bold text-sm">
              Portal Principal
            </span>
          </Link>

          <h1 className="text-base sm:text-xl font-bold text-[#0d1a1a] font-texgyretermes">
            <Link
              to="/ufpa"
              aria-label="Ir para home da UFPA"
              className="flex items-center gap-3 sm:gap-5"
            >
              <img
                src="/assets/remanescentes-ufpa.jpg"
                alt="Logo Remanescentes UFPA"
                className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover shadow-sm"
              />
              <span className="inline text-lg sm:text-2xl md:text-3xl">
                Remanescentes UFPA
              </span>
            </Link>
          </h1>
        </div>

        {/* LADO DIREITO: Menu Desktop + Menu Mobile Trigger */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-6">
            <Link
              to="/ufpa"
              className="hover:text-white transition-colors text-xs sm:text-sm md:text-base text-[#0d1a1a] font-quicksand font-bold"
            >
              INÍCIO
            </Link>
            <Link
              to="/ufpa/reunioes"
              className="hover:text-white transition-colors text-xs sm:text-sm md:text-base text-[#0d1a1a] font-quicksand font-bold"
            >
              REUNIÕES
            </Link>
            <Link
              to="/ufpa/galeria"
              className="hover:text-white transition-colors text-xs sm:text-sm md:text-base text-[#0d1a1a] font-quicksand font-bold"
            >
              GALERIA
            </Link>
            <Link
              to="/ufpa/quem-somos"
              className="hover:text-white transition-colors text-xs sm:text-sm md:text-base text-[#0d1a1a] font-quicksand font-bold"
            >
              QUEM SOMOS
            </Link>
            <Link
              to="/ufpa/contato"
              className="hover:text-white transition-colors text-xs sm:text-sm md:text-base text-[#0d1a1a] font-quicksand font-bold"
            >
              CONTATO
            </Link>
          </div>
          
          <div onClick={() => setOpen(!open)}>
            {/* Ajustei a cor para #0d1a1a para dar contraste no azul */}
            <Menu className="md:hidden cursor-pointer text-[#0d1a1a] w-8 h-8" />
          </div>
        </div>
        
        <MenuResponsivo open={open} onClose={() => setOpen(false)} />
      </div>
    </nav>
  );
}