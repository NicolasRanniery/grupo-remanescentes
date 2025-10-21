export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Remanescentes. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
