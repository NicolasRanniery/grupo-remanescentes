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
          className="w-32 h-32 object-cover rounded-full border-2 border-black"
        />
        <h3 className="mt-3 font-semibold font-baskerville">Remanescentes {props.nome}</h3>
      </div>
    </>
  );
}
