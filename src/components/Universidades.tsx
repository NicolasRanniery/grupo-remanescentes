export default function Universidades(props: { caminho: string; nome: string }) {
  return (
    <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
      <img
        src={`/assets/${props.caminho}.jpg`}
        alt={`Remanescentes ${props.nome}`}
        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-[#cdad7d] shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
      <h3 className="mt-3 font-semibold font-quicksand text-[#303030] text-lg">
        Remanescentes {props.nome}
      </h3>
    </div>
  );
}
