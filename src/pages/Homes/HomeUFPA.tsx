import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeUFPA() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f4f1ec] text-[#303030]">
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
    </main>
  );
}
