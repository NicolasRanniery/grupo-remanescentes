import CarrosselQuemSomos from "@/components/CarrosselQuemSomos";
// 1. Importe o novo componente que você acabou de criar
import CarrosselImagens from "@/components/CarrosselImagens"; // Ajuste o caminho se for diferente

// 2. Defina a lista de imagens que seu carrossel vai usar
//    (Você pode mover isso para um arquivo de 'constantes' depois)
const imagensDoGrupo = [
  "/assets/carrossel/reuniao_remanescentes.webp", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes2.jpeg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes3.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes4.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes5.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes6.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes7.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes8.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes9.jpg", // A imagem que já estava lá
  "/assets/carrossel/reuniao_remanescentes10.jpg", // A imagem que já estava lá

];

export default function QuemSomos() {
  return (
    <section className="relative flex-1 bg-[#e9ded2] py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-8">
        {/* Metade Esquerda (Textos) - Sem alteração */}
        <CarrosselQuemSomos />

        {/* Metade Direita (Imagens) - Alterado */}
        <div className="lg:w-1/2 w-full">
          {/* 3. Substitua o <img ... /> por <CarrosselImagens ... /> */}
          <CarrosselImagens images={imagensDoGrupo} />

          {/* O código antigo foi substituído:
            <img
              src="/assets/reuniao_remanescentes.webp" 
              alt="Grupo Remanescentes"
              className="rounded-lg shadow-lg w-full"
            />
          */}

          {/* Os indicadores comentados abaixo também não são mais necessários,
              pois o CarrosselImagens já cria os seus próprios. */}
          {/* <div className="flex justify-center gap-2 mt-4"> ... </div> */}
        </div>
      </div>
    </section>
  );
}