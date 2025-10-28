import { useState, useEffect, useCallback } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable"; // 1. Importar o hook de swipe

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

  // 2. Usar 'useCallback' para evitar recriar as funções em cada renderização
  //    Isso é importante para os hooks de efeito e swipe
  const prev = useCallback(
    () => setCurr((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length],
  );

  const next = useCallback(
    () => setCurr((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length],
  );

  // 3. Configurar os handlers de swipe (arrastar)
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true, // Evita que a página role verticalmente enquanto se arrasta horizontalmente
    trackMouse: true, // Permite arrastar com o mouse também
  });

  // Efeito para o slide automático (agora usando a função 'next' do useCallback)
  useEffect(() => {
    if (!autoSlideInterval || autoSlideInterval === 0 || images.length === 0)
      return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, images.length, next]);

  // 4. Função para capturar as setas do teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prev();
    } else if (e.key === "ArrowRight") {
      next();
    }
  };

  if (!images || images.length === 0) {
    return <div>Nenhuma imagem para exibir.</div>;
  }

  return (
    // 5. Adicionar 'tabIndex', 'onKeyDown' e os handlers do swipe
    <div
      {...handlers} // Aplica os handlers de swipe aqui
      className="relative w-full overflow-hidden rounded-lg shadow-lg group focus:outline-none"
      tabIndex={0} // Permite que a div receba foco para capturar teclas
      onKeyDown={handleKeyDown} // Captura o evento de teclado
      aria-roledescription="carrossel"
      aria-label="Galeria de imagens"
    >
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
            className="w-full shrink-0 object-cover aspect-video"
            aria-hidden={curr !== index} // Melhora acessibilidade
          />
        ))}
      </div>

      {/* Botões de Navegação (Sobrepostos) */}
      {/* Adicionei 'group-focus-within:opacity-100' para mostrar botões quando focado */}
      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
        <button
          onClick={prev}
          className="p-1 sm:p-2 rounded-full text-[#cdad7d] bg-[#292929]/70 hover:bg-[#292929] transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-label="Slide anterior"
        >
          <CircleChevronLeft className="w-5 h-5 sm:w-6 sm-h-6" />
        </button>
        <button
          onClick={next}
          className="p-1 sm:p-2 rounded-full text-[#cdad7d] bg-[#292929]/70 hover:bg-[#292929] transition-all opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-label="Próximo slide"
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