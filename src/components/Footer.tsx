export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#535353] to-[#292929] text-[#cdad7d] text-center p-4 mt-auto font-quicksand">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Remanescentes. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
