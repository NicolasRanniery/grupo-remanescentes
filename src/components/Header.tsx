import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-black text-white p-2 flex justify-between items-center">
      <h1 className="text-xl font-bold flex items-center justify-between font-baskerville gap-5 text-[#cdad7d]">
        <Link to="/" ><img src="./src/assets/uniao-remanescentes.png" alt="Logo Remanescentes" className="h-20 w-20 rounded-full"/></Link>
        REMANESCENTES
      </h1>

      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400 transition-colors text-[#cdad7d] font-baskerville font-bold">
          INÍCIO
        </Link>
        <Link to="/faca-parte" className="hover:text-blue-400 transition-colors text-[#cdad7d] font-baskerville font-bold">
          FAÇA PARTE
        </Link>
        <Link to="/saiba-mais" className="hover:text-blue-400 transition-colors text-[#cdad7d] font-baskerville font-bold">
          SAIBA MAIS
        </Link>
        <Link to="/contato" className="hover:text-blue-400 transition-colors text-[#cdad7d] font-baskerville font-bold">
          CONTATO
        </Link>
      </div>
    </nav>
  );
}
