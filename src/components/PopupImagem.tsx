"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface PopupImagemProps {
  imagem: string;
  delay?: number; // tempo em milissegundos antes de aparecer
}

export default function PopupImagem({ imagem, delay = 1000 }: PopupImagemProps) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMostrar(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!mostrar) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-9999 animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-[90%]">
        <button
          onClick={() => setMostrar(false)}
          className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
        >
          <X size={20} />
        </button>

        <img
          src={imagem}
          alt="Popup"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
