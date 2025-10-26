import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Universidades from "@/components/Universidades";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center text-center px-4 flex-1 bg-[#e9ded2]">
        <div className="mt-4">
          <p className="font-texgyretermes text-2xl md:text-2xl text-[#303030]">
            Seja bem vindo ao
          </p>
          <h1 className="text-5xl md:text-8xl mb-4 text-[#303030] font-texgyretermes underline decoration-2 underline-offset-8 -mt-3 md:-mt-5">
            Remanescentes
          </h1>
          <p className="max-w-xl text-xl md:text-3xl font-texgyretermes italic text-[#303030]">
            Fazendo Deus ser conhecido nas universidades
          </p>
        </div>
        <section className="py-10 md:py-16 px-4 md:px-8 text-center">
          {/* Container dos professores */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {/* <Universidades caminho="remanescentes-nome da universidade" nome="nome da universidade" /> */}
            <Universidades caminho="remanescentes-ufpa" nome="UFPA" />
            <Universidades caminho="remanescentes-ufra" nome="UFRA" />
            <Universidades caminho="remanescentes-unifamaz" nome="UNIFAMAZ" />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
