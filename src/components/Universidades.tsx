import { Link } from "react-router-dom";

export default function Universidades({ caminho, nome }: { caminho: string; nome: string }) {
  return (
    <Link
      to={`/${nome.toLowerCase()}`} // ex: /universidade/ufpa
      className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
    >
      <img
        src={`/assets/${caminho}.jpg`}
        alt={`Remanescentes ${nome}`}
        className="w-32 h-32 object-cover rounded-full border-2 border-black"
      />
      <h3 className="mt-3 font-semibold font-quicksand text-[#303030]">
        Remanescentes {nome}
      </h3>
    </Link>
  );
}
