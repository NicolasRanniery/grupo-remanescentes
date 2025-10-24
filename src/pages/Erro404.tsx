export default function Erro404() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-6 text-center bg-[#e9ded2]">
      <img
        src="/assets/jesus_erro.svg"
        alt="Jesus Erro 404"
        className="w-40 h-auto mb-6 md:w-56 lg:w-64"
      />

      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#303030] font-texgyretermes italic">
        Página não encontrada
      </h1>

      <p className="max-w-xl text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-source-serif-4">
        Às vezes os caminhos da internet se perdem, mas há um <br />que nunca falha:&nbsp;
        <strong>Jesus, o Caminho, a Verdade e a Vida.</strong>
        <br />
        <span className="text-gray-500 text-sm">(João 14:6)</span>
      </p>

      <a
        href="/"
        className="inline-block px-6 py-2 rounded-md text-base sm:text-lg font-medium text-white bg-[#535353] hover:bg-[#292929] transition-colors duration-200 shadow-md font-source-serif-4"
      >
        Voltar à página inicial
      </a>
    </div>
  );
}
