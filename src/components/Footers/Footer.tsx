export default function Footer(props: {ano_inicial: number, titulo: string}) {
  return (
    <footer className="bg-linear-to-r from-[#535353] to-[#292929] text-[#cdad7d] text-center p-4 mt-auto font-quicksand">
      <p className="text-sm">
        &copy; {props.ano_inicial} - {new Date().getFullYear()} | {props.titulo} | Todos os direitos reservados.
      </p>
    </footer>
  );
}
