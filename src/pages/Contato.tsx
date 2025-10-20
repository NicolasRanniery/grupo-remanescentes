export default function Contato() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh]">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Contato</h1>
      <p className="max-w-lg text-gray-600 mb-4">
        Quer falar comigo? Envie um e-mail para
        <span className="text-blue-500"> exemplo@email.com</span>.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Enviar Mensagem
      </button>
    </section>
  );
}
