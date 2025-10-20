import Universidades from "@/components/Universidades";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[70vh] px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Bem-vindo ao Meu Site!
      </h1>
      <p className="max-w-xl text-gray-600">
        Este é um projeto de exemplo feito com React, Tailwind e React Router.
        Use a barra de navegação acima para explorar as páginas.
      </p>
      <section className="py-16 px-8 text-center">
        {/* Container dos professores */}
        <div className="flex flex-wrap justify-center gap-8">
            
          {/* <Universidades caminho="remanescentes-ufpa" nome="UFPA" /> */}
          <Universidades caminho="remanescentes-ufpa" nome="UFPA" />
          <Universidades caminho="remanescentes-ufra" nome="UFRA" />
          <Universidades caminho="remanescentes-unifamaz" nome="Unifamaz" />
        </div>
      </section>
    </section>
  );
}
