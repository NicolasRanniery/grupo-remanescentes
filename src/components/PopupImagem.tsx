"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface PopupImagemProps {
  imagem: string;
  video: boolean;
  delay?: number;
}

export default function PopupImagem({
  imagem,
  video,
  delay = 1000,
}: PopupImagemProps) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMostrar(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!mostrar) return null;

  return (
    // Z-index alto para ficar acima de tudo
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 animate-fade-in p-4">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl"
      >
        {/* Botão de Fechar */}
        <button
          onClick={() => setMostrar(false)}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {video ? (
          /* ASPECT-VIDEO: Isso é o segredo. 
             Mantém a proporção 16:9 independente da largura da tela.
             Removemos o height fixo.
          */
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/_R4p-o9ldy4"
              className="w-full h-full" // Preenche o container aspect-video
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={imagem}
            alt="Popup"
            className="w-full h-auto object-cover" // Removemos o rounded aqui pois o pai já tem overflow-hidden
          />
        )}
      </div>
    </div>
  );
}