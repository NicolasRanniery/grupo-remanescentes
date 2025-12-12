export default function FooterUFPA(props: {ano_inicial: number, titulo: string}) {
  return (
    <footer className="bg-linear-to-r from-[#6dd7da] to-[#5ce1e6] text-[#0d1a1a] text-center p-4 mt-auto font-quicksand">
      <p className="text-sm">
        &copy; {props.ano_inicial} - {new Date().getFullYear()} | {props.titulo} | Todos os direitos reservados.
      </p>
    </footer>
  );
}
