import { useState, useEffect } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

interface CarrosselImagensProps {
  /** Lista de caminhos para as imagens (ex: ["/img1.webp", "/img2.webp"]) */
  images: string[];
  /** Tempo em milissegundos para trocar de slide. Defina como 0 para desativar. */
  autoSlideInterval?: number;
}

export default function CarrosselImagens({
  images,
  autoSlideInterval = 5000, // 5 segundos por padrão
}: CarrosselImagensProps) {
  const [curr, setCurr] = useState(0);

  // Funções de navegação manual
  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  // Efeito para o slide automático
  useEffect(() => {
    // Se o intervalo for 0 ou não houver imagens, não faz nada
    if (!autoSlideInterval || autoSlideInterval === 0 || images.length === 0)
      return;

    // Configura o intervalo
    const slideInterval = setInterval(next, autoSlideInterval);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, images.length, next]); // 'next' está aqui para seguir as regras do hook

  if (!images || images.length === 0) {
    return <div>Nenhuma imagem para exibir.</div>;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      {/* Container das Imagens (Trilho) */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagem ${index + 1} do grupo`}
            className="w-full shrink-0 object-cover aspect-video" // 'aspect-video' ajuda a manter a proporção
          />
        ))}
      </div>

      {/* Botões de Navegação (Sobrepostos) */}
      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
        <button
          onClick={prev}
          className="p-1 sm:p-2 rounded-full text-[#cdad7d] bg-[#292929]/70 hover:bg-[#292929] transition-colors"
        >
          <CircleChevronLeft className="w-5 h-5 sm:w-6 sm-h-6" />
        </button>
        <button
          onClick={next}
          className="p-1 sm:p-2 rounded-full text-[#cdad7d] bg-[#292929]/70 hover:bg-[#292929] transition-colors"
        >
          <CircleChevronRight className="w-5 h-5 sm:w-6 sm-h-6" />
        </button>
      </div>

      {/* Bolinhas Indicadoras (Sobrepostas) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`
              w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all
              ${curr === i ? "bg-[#cdad7d] scale-110" : "bg-white/50 hover:bg-white/80"}
            `}
          />
        ))}
      </div>
    </div>
  );
}