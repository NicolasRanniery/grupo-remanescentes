import Universidades from "@/components/Universidades";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 flex-1">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Bem vindo ao Remanescentes
      </h1>
      <p className="max-w-xl text-2xl">
        Fazendo Deus ser conhecido nas universidades
      </p>
      <section className="py-16 px-8 text-center">
        {/* Container dos professores */}
        <div className="flex flex-wrap justify-center gap-20">
          {/* <Universidades caminho="remanescentes-ufpa" nome="UFPA" /> */}
          <Universidades caminho="remanescentes-ufpa" nome="UFPA" />
          <Universidades caminho="remanescentes-ufra" nome="UFRA" />
          <Universidades caminho="remanescentes-unifamaz" nome="Unifamaz" />
        </div>
      </section>
    </section>
  );
}
