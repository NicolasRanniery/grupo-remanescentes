import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import PopupImagem from "@/components/PopupImagem";

export default function Home() {
  const universidades = [
    {
      nome: "UFPA",
      caminho: "remanescentes-ufpa",
      cor: "from-[#6dd7da] to-[#5ce1e6]",
      rota: "/ufpa",
    },
    {
      nome: "UFRA",
      caminho: "remanescentes-ufra",
      cor: "from-[#1f9d55] to-[#38ef7d]",
      rota: "/ufra",
    },
    {
      nome: "Unifamaz",
      caminho: "remanescentes-unifamaz",
      cor: "from-[#a4508b] to-[#5f0a87]",
      rota: "/unifamaz",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#f3eee7] text-[#303030] font-quicksand">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center h-[70vh] bg-linear-to-b from-[#e9ded2] to-[#d8c5aa] overflow-hidden">
        {/* <PopupImagem imagem="/assets/culto_universitario.webp" video={true} /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <p className="font-texgyretermes text-2xl md:text-3xl text-[#303030] -mb-2">
            Seja bem-vindo ao
          </p>
          <h1 className="text-5xl md:text-8xl mb-4 text-[#303030] font-texgyretermes underline decoration-2 underline-offset-8">
            Remanescentes
          </h1>
          <p className="max-w-xl mx-auto text-xl md:text-3xl font-texgyretermes italic text-[#303030]">
            Fazendo Deus ser conhecido nas universidades
          </p>

          <div className="mt-8">
            <Link
              to="/reunioes"
              className="bg-[#303030] text-[#e9ded2] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Ver Reuniões
            </Link>
          </div>
        </motion.div>

        {/* Fundo decorativo com blur */}
        <div className="absolute w-100 h-100 bg-[#cdad7d] rounded-full blur-3xl opacity-20 top-20 left-10" />
        <div className="absolute w-7500px] bg-[#303030] rounded-full blur-3xl opacity-10 bottom-10 right-10" />
      </section>

      {/* UNIVERSIDADES */}
      <section className="py-16 px-6 md:px-12 text-center bg-[#e9ded2]">
        <h2 className="text-4xl md:text-5xl font-texgyretermes italic mb-12 text-[#303030]">
          Conheça nossos grupos universitários
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {universidades.map((uni, i) => (
            <div // colocar motion.div quando terminar a página pra cada universidade
              key={i}
              // whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.3 }}
              className={`relative bg-linear-to-b ${uni.cor} rounded-2xl p-0.5 shadow-lg hover:shadow-2xl transition-all`}
            >
              {/* <Link to={uni.rota}> */}
                <div //depois colocar Link novamente
                  // to={uni.rota}
                  className="bg-[#f4f1ec] rounded-2xl p-6 flex flex-col items-center hover:bg-[#f0ebe4] transition"
                >
                  <img
                    src={`/assets/${uni.caminho}.jpg`}
                    alt={`Remanescentes ${uni.nome}`}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <h3 className="mt-4 font-bold text-2xl text-[#303030]">
                    Remanescentes {uni.nome}
                  </h3>
                  {/* <p className="text-sm mt-1 italic text-gray-700">
                  Clique para saber mais
                  </p> */}
                </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
