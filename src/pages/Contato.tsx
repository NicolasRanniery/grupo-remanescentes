import { Phone, Mail } from "lucide-react";

export default function Contato() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center text-center bg-[#f4f1ec]">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-4 text-gray-900 font-league-spartan">
        Conheça mais do que fazemos
      </h1>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 md:mb-30">
        <div className="bg-[#5ce1e6] p-5 rounded-lg shadow-md w-full max-w-xs md:w-auto">
          <p className="text-[#222344] font-baskerville text-xl mb-2">UFPA</p>
          <img
            src="/assets/qrcode-ufpa.svg"
            alt="Contato"
            className="w-40 h-40 mx-auto object-contain"
          />
        </div>
        <div className="bg-[#8c52ff] p-5 rounded-lg shadow-md w-full max-w-xs md:w-auto">
          <p className="text-[#222344] font-baskerville text-xl mb-2">
            UNIFAMAZ
          </p>
          <img
            src="/assets/qrcode-unifamaz.svg"
            alt="Contato"
            className="w-40 h-40 mx-auto object-contain"
          />
        </div>
        <div className="bg-[#00bf63] p-5 rounded-lg shadow-md w-full max-w-xs md:w-auto">
          <p className="text-[#222344] font-baskerville text-xl mb-2">UFRA</p>
          <img
            src="/assets/qrcode-ufra.svg"
            alt="Contato"
            className="w-40 h-40 mx-auto object-contain"
          />
        </div>
      </div>
      {/* 4. Seção de Contatos */}
      <div className="w-full text-center mt-8 md:absolute md:bottom-6 md:left-6 md:text-left md:w-auto md:mt-0">
        <h2 className="text-3xl md:text-4xl mb-3 font-baskerville">Contatos</h2>
        <div className="flex flex-col gap-3 text-lg font-inter items-center md:items-start">
          <div className="flex items-center gap-3">
            <Phone className="text-[#cdad7d]" />
            <span>
              {/* MUDANÇA: Quebra a linha dos telefones apenas no mobile */}
              Santiago: 91 98603-0333 /<br className="md:hidden" />
              Paloma: 91 98933-5531
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-[#cdad7d]" />
            <a
              href="mailto:remanescentesufpa@gmail.com"
              className="hover:underline"
            >
              remanescentesufpa@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
