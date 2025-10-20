import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/" ><img src="./src/assets/uniao-remanescentes.png" alt="Logo Remanescentes" className="h-20 w-20 rounded-full"/></Link>
        
      </h1>

      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400 transition-colors">
          Início
        </Link>
        <Link to="/sobre" className="hover:text-blue-400 transition-colors">
          Sobre
        </Link>
        <Link to="/contato" className="hover:text-blue-400 transition-colors">
          Contato
        </Link>
      </div>
    </nav>
  );
}
