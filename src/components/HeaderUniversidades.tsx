import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  nome: string;
  color_left: string;
  color_right: string;
}

export default function HeaderUniversidades({
  nome,
  color_left,
  color_right,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 text-white"
      style={{
        background: `linear-gradient(to right, ${color_left}, ${color_right})`,
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        {/* Nome da universidade */}
        <Link to="/" className="font-bold text-2xl md:text-3xl font-texgyretermes italic">
          {nome}
        </Link>

        {/* Botão do menu (mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Links */}
        <ul
          className={`${
            open ? "block" : "hidden"
          } md:flex md:space-x-8 md:items-center text-lg`}
        >
          <li>
            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/reunioes" className="hover:underline">
              Reuniões
            </Link>
          </li>
          <li>
            <Link to="/galeria" className="hover:underline">
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/contato" className="hover:underline">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
