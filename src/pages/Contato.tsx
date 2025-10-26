import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contato() {
  const universidades = [
    {
      nome: "UFPA",
      bg: "bg-[#5ce1e6]",
      qr: "/assets/qrcode-ufpa.svg",
      insta: "https://www.instagram.com/remanescentesufpa?igsh=YXh4YXZoeGtpeHA1",
      btnColor: "bg-[#0B93DB]",
    },
    {
      nome: "UNIFAMAZ",
      bg: "bg-[#8c52ff]",
      qr: "/assets/qrcode-unifamaz.svg",
      insta: "https://www.instagram.com/remanescentesunifamaz?igsh=cTd1NTV6dXp0emtk",
      btnColor: "bg-[#950BDB]",
    },
    {
      nome: "UFRA",
      bg: "bg-[#00bf63]",
      qr: "/assets/qrcode-ufra.svg",
      insta: "https://www.instagram.com/remanescentesufra?igsh=NTd2cDU0eGs2YTZq",
      btnColor: "bg-[#0BDB30]",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-[#e9ded2] px-4 py-10 md:py-20 gap-12">
      <h1 className="text-4xl md:text-6xl font-texgyretermes italic text-[#303030] text-center">
        Conheça um pouco mais daquilo que fazemos...
      </h1>

      {/* Cartões das universidades */}
      <div className="flex flex-wrap justify-center gap-8">
        {universidades.map((u) => (
          <div
            key={u.nome}
            className={`${u.bg} p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all w-64 flex flex-col items-center gap-4`}
          >
            <h2 className="text-xl font-semibold text-[#222344]">{u.nome}</h2>
            <img src={u.qr} alt={`QR ${u.nome}`} className="w-40 h-40 object-contain" />
            <Button asChild variant="outline" className={`${u.btnColor} border-0`}>
              <a href={u.insta} target="_blank" rel="noopener noreferrer" className="text-white">
                Instagram
              </a>
            </Button>
          </div>
        ))}
      </div>

      {/* Contatos gerais */}
      <div className="mt-16 w-full max-w-3xl flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-texgyretermes italic text-[#303030]">Contatos</h2>
          <div className="flex flex-col gap-3 text-lg font-inter">
            <div className="flex items-center gap-3">
              <Phone className="text-[#cdad7d]" />
              <span>
                Santiago:{" "}
                <a
                  href="https://wa.me/5591986030333?text=Gostaria%20de%20saber%20mais%20sobre%20o%20grupo%20remanescentes."
                  className="hover:text-blue-500"
                >
                  91 98603-0333
                </a>{" "}
                / Paloma:{" "}
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
      </div>
    </section>
  );
}
