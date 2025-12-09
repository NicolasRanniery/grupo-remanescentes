import { PlayCircle } from "lucide-react";

// 1. DEFINIÇÃO DA INTERFACE
interface VideoItem {
  id: string; // O código do vídeo no YouTube (ex: dQw4w9WgXcQ)
  titulo: string;
  descricao: string;
  data: string;
}

// 2. LISTA DE VÍDEOS (Adicione seus vídeos aqui)
const listaDeVideos: VideoItem[] = [
  {
    id: "_R4p-o9ldy4", // Exemplo: Substitua pelo ID do seu vídeo real
    titulo: "Culto Universitário 2025",
    descricao: "Momentos de louvor e adoração no campus UFPA.",
    data: "28 Nov 2025",
  },
//   {
//     id: "M7lc1UVf-VE", // Exemplo
//     titulo: "Testemunho Impactante",
//     descricao: "Confira o que Deus tem feito no meio dos estudantes universitários.",
//     data: "15 Set 2025",
//   },
//   {
//     id: "tgbNymZ7vqY", // Exemplo
//     titulo: "Melhores Momentos - Retiro",
//     descricao: "Um resumo de tudo que vivemos no nosso último encontro de fim de semana.",
//     data: "01 Set 2025",
//   },
  // Adicione mais objetos aqui...
];

export default function Galeria() {
  return (
    <section className="min-h-screen bg-[#e9ded2] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="mb-12 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#303030] font-texgyretermes italic">
            Nossas Imagens e Vídeos
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-source-serif-4 max-w-2xl">
            Acompanhe os registros do que tem acontecido no movimento.
          </p>
        </div>

        {/* GRADE DE VÍDEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaDeVideos.map((video, index) => (
            <div
              key={index}
              className="group bg-[#f4ece4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d6c4b0]"
            >
              {/* IFRAME DO YOUTUBE */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy" // Melhora a performance carregando só quando aparece na tela
                ></iframe>
              </div>

              {/* CONTEÚDO DO CARD */}
              <div className="p-6 flex flex-col justify-between h-auto">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <PlayCircle className="w-4 h-4 text-[#cdad7d]" />
                    <span className="text-sm font-semibold text-[#cdad7d] uppercase tracking-wider">
                      {video.data}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#303030] font-texgyretermes mb-3 group-hover:text-[#cdad7d] transition-colors">
                    {video.titulo}
                  </h3>
                  
                  <p className="text-gray-600 font-source-serif-4 leading-relaxed text-sm md:text-base line-clamp-3">
                    {video.descricao}
                  </p>
                </div>
                
                {/* Botão Decorativo (Opcional) */}
                <div className="mt-4 pt-4 border-t border-[#e0d0bf]">
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-[#303030] hover:text-[#cdad7d] transition-colors flex items-center gap-1"
                  >
                    Assistir no YouTube &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MENSAGEM SE NÃO HOUVER VÍDEOS */}
        {listaDeVideos.length === 0 && (
            <div className="text-center py-20 opacity-60">
                <p className="text-xl font-source-serif-4 text-[#303030]">Em breve novos vídeos...</p>
            </div>
        )}
      </div>
    </section>
  );
}