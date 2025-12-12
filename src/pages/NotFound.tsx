import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center flex-1 px-6 py-12 text-center bg-[#e9ded2] min-h-full">
      {/* Imagem com loading lazy para performance */}
      <img
        src="/assets/jesus_erro.svg"
        alt="Ilustração de Jesus - Erro 404"
        loading="lazy"
        className="w-40 h-auto mb-6 md:w-56 lg:w-64 drop-shadow-sm"
      />

      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#303030] font-texgyretermes italic">
        Página não encontrada
      </h1>

      <p className="max-w-xl text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-source-serif-4">
        Às vezes os caminhos da internet se perdem, mas há um <br className="hidden sm:block" />
        que nunca falha:&nbsp;
        <strong className="text-[#303030]">Jesus, o Caminho, a Verdade e a Vida.</strong>
        <br />
        <span className="text-gray-500 text-sm mt-2 block">(João 14:6)</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Botão Principal: Voltar para Home */}
        <Link
          to="/"
          className="inline-block px-6 py-2 rounded-md text-base sm:text-lg font-medium text-white bg-[#535353] hover:bg-[#292929] transition-colors duration-200 shadow-md font-source-serif-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Voltar à página inicial
        </Link>

        {/* Botão Secundário: Voltar Página Anterior */}
        <button
          onClick={() => navigate(-1)}
          className="inline-block px-6 py-2 rounded-md text-base sm:text-lg font-medium text-[#535353] bg-transparent border-2 border-[#535353] hover:bg-[#535353] hover:text-white transition-colors duration-200 shadow-sm font-source-serif-4"
        >
          Voltar Página
        </button>
      </div>
    </section>
  );
}