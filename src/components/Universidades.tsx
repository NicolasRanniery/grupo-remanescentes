export default function Universidades(props: {
  caminho: string;
  nome: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={`src/assets/${props.caminho}.jpg`}
          alt={`Remanescentes ${props.nome}`}
          className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400"
        />
        <h3 className="mt-3 font-semibold">Remanescentes {props.nome}</h3>
      </div>
    </>
  );
}
