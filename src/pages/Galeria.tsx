import { PlayCircle, FileText, HardDrive, ExternalLink, Link as LinkIcon } from "lucide-react";

// --- 1. INTERFACES ---

interface VideoItem {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
}

// Nova interface para os links
interface LinkItem {
  titulo: string;
  url: string;
  descricao: string;
  tipo: "form" | "drive" | "outro"; // Para decidir qual ícone mostrar
}

// --- 2. DADOS (Adicione seus dados aqui) ---

// Lista de Links Importantes
const listaDeLinks: LinkItem[] = [
  // {
  //   titulo: "Formulário de Inscrição",
  //   url: "https://google.com/forms", // Coloque seu link real aqui
  //   descricao: "Inscreva-se para o nosso próximo retiro.",
  //   tipo: "form",
  // },
  {
    titulo: "Pasta de Fotos (Drive)",
    url: "https://1drv.ms/f/c/2709dc39226f48f3/El8L8pFSOFNOm4_AEUsn6hgBnJUYRIwKkCTV0ypp8IPr_w",
    descricao: "Acesse todas as fotos do nosso Culto Universitário 2025.",
    tipo: "drive",
  },
  // {
  //   titulo: "Grupo do WhatsApp",
  //   url: "https://chat.whatsapp.com",
  //   descricao: "Entre na nossa comunidade para avisos rápidos.",
  //   tipo: "outro",
  // },
];

// Lista de Vídeos
const listaDeVideos: VideoItem[] = [
  {
    id: "_R4p-o9ldy4",
    titulo: "Culto Universitário 2025",
    descricao: "Momentos de louvor e adoração no campus UFPA.",
    data: "28 Nov 2025",
  },
  // Adicione mais vídeos aqui...
];

export default function Galeria() {
  
  // Função auxiliar para escolher o ícone baseado no tipo
  const getIcon = (tipo: string) => {
    switch (tipo) {
      case "form": return <FileText className="w-6 h-6 text-[#e9ded2]" />;
      case "drive": return <HardDrive className="w-6 h-6 text-[#e9ded2]" />;
      default: return <LinkIcon className="w-6 h-6 text-[#e9ded2]" />;
    }
  };

  return (
    <section className="min-h-screen bg-[#e9ded2] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO GERAL */}
        <div className="mb-12 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#303030] font-texgyretermes italic">
            Materiais e Mídia
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-source-serif-4 max-w-2xl">
            Acesse nossos links importantes e acompanhe os registros do movimento. 
          </p>
        </div>

        {/* --- SEÇÃO 1: LINKS IMPORTANTES --- */}
        {listaDeLinks.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#303030] font-texgyretermes border-l-4 border-[#cdad7d] pl-4">
              Links
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listaDeLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-[#303030] rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 border border-[#4a4a4a]"
                >
                  {/* Ícone com fundo circular */}
                  <div className="bg-[#cdad7d] p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(link.tipo)}
                  </div>

                  {/* Texto do Link */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-[#e9ded2] font-texgyretermes leading-tight mb-2">
                        {link.titulo}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-gray-400 font-source-serif-4 text-sm leading-relaxed group-hover:text-gray-300">
                      {link.descricao}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* --- SEÇÃO 2: VÍDEOS --- */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#303030] font-texgyretermes border-l-4 border-[#cdad7d] pl-4">
            Galeria de Vídeos
          </h2>

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
                    loading="lazy"
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
      </div>
    </section>
  );
}