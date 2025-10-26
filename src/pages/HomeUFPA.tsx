import HeaderUniversidades from "@/components/HeaderUniversidades";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeUFPA() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f4f1ec] text-[#303030]">
      <HeaderUniversidades
        nome="Remanescentes UFPA"
        color_left="#6dd7da"
        color_right="#5ce1e6"
      />

      {/* Apresentação */}
      <section className="text-center px-6 py-16 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-texgyretermes italic font-bold mb-4"
        >
          Remanescentes UFPA
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700">
          Somos um grupo de estudantes comprometidos em compartilhar o
          evangelho de Cristo dentro da Universidade Federal do Pará.  
          Nosso propósito é criar um ambiente de comunhão, oração e discipulado
          entre universitários.
        </p>
      </section>

      {/* Reuniões */}
      <section className="bg-[#e9ded2] py-10 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-texgyretermes italic">
          Próximas reuniões
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <p className="text-lg mb-2">📍 Local: Mirante do Rio</p>
          <p className="text-lg mb-2">📅 Toda quinta-feira</p>
          <p className="text-lg mb-4">⏰ 18h00</p>

          <Link
            to="/reunioes"
            className="bg-[#303030] text-[#e9ded2] px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Ver todas as reuniões
          </Link>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 px-6 md:px-12 bg-[#f4f1ec] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-texgyretermes italic">
          Momentos da UFPA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.img
              key={i}
              src={`/assets/ufpa-foto${i}.jpg`}
              alt={`Momento UFPA ${i}`}
              className="rounded-xl shadow-md object-cover h-64 w-full hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Contato */}
      <footer className="py-10 text-center bg-linear-to-r from-[#6dd7da] to-[#5ce1e6] text-white font-texgyretermes">
        <p className="text-xl font-semibold mb-3">
          “Eu sou o caminho, a verdade e a vida.” — João 14:6
        </p>
        <p>Entre em contato conosco:</p>
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://instagram.com/remanescentes.ufpa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://chat.whatsapp.com/exemplo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
