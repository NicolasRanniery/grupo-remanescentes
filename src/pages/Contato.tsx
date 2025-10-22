import { Phone, Mail, Redo } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contato() {
  return (
    <section className="relative flex-1 flex flex-col bg-[#f4f1ec]">
      <div className="text-left px-4 sm:px-8 pt-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-4 text-[#303030] font-texgyretermes italic">
          Conheça um pouco mais daquilo <br />
          que fazemos...
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 md:mb-32 mt-8">
        <div className="bg-[#5ce1e6] p-5 rounded-lg shadow-md w-full max-w-xs md:w-auto flex flex-col items-center gap-4">
          <p className="text-[#222344] font-baskerville text-xl mb-2">UFPA</p>

          <img
            src="/assets/qrcode-ufpa.svg"
            alt="Contato"
            className="w-40 h-40 object-contain"
          />
          <Button asChild variant="outline" className="bg-[#0B93DB] border-0">
            <a
              href="https://www.instagram.com/remanescentesufpa?igsh=YXh4YXZoeGtpeHA1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Button>
        </div>

        <div className="bg-[#8c52ff] p-5 rounded-lg shadow-md w-full max-w-xs md:w-auto flex flex-col items-center gap-4">
          <p className="text-[#222344] font-baskerville text-xl mb-2">
            UNIFAMAZ
          </p>

          <img
            src="/assets/qrcode-unifamaz.svg"
            alt="Contato"
            className="w-40 h-40 object-contain"
          />
          <Button asChild variant="outline" className="bg-[#950BDB] border-0">
            <a
              href="https://www.instagram.com/remanescentesunifamaz?igsh=cTd1NTV6dXp0emtk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0C0BDB]"
            >
              Instagram
            </a>
          </Button>
        </div>
        <div className="bg-[#00bf63] p-5 rounded-lg shadow-md w-full max-w-xs md:w-auto flex flex-col items-center gap-4">
          <p className="text-[#222344] font-baskerville text-xl mb-2">UFRA</p> 
          <img
            src="/assets/qrcode-ufra.svg"
            alt="Contato"
            className="w-40 h-40 object-contain"
          />
          <Button asChild variant="outline" className="bg-[#0BDB30] border-0">
            <a
              href="https://www.instagram.com/remanescentesufra?igsh=NTd2cDU0eGs2YTZq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full text-center mt-8 md:absolute md:bottom-6 md:left-6 md:text-left md:w-auto md:mt-0">
        <h2 className="text-3xl md:text-4xl mb-3 font-texgyretermes font-bold italic">Contatos</h2>
        <div className="flex flex-col gap-3 text-lg font-inter items-center md:items-start">
          <div className="flex items-center gap-3">
            <Phone className="text-[#cdad7d]" />

            <span className="font-source-serif-4">
              Santiago:{" "}
              <a
                href="https://wa.me/5591986030333?text=Gostaria%20de%20saber%20mais%20sobre%20o%20grupo%20remanescentes."
                className="hover:text-blue-500"
              >
                91 98603-0333
              </a>{" "}
              / <br className="md:hidden" />
              Paloma:{" "}
              <a
                href="https://wa.me/5591989335531?text=Gostaria%20de%20saber%20mais%20sobre%20o%20grupo%20remanescentes."
                className="hover:text-blue-500"
              >
                91 98933-5531
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-[#cdad7d]" />

            <a
              href="mailto:remanescentesufpa@gmail.com"
              className="hover:underline font-source-serif-4"
            >
              remanescentesufpa@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
