import CarrosselQuemSomos from "@/components/CarrosselQuemSomos";

export default function QuemSomos() {
  return (
    <section className="relative flex-1 bg-[#f4f1ec] py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-8">
        <CarrosselQuemSomos />
        <div className="lg:w-1/2">
          <img
            src="/assets/reuniao_remanescentes.webp" // <-- TROQUE PELA SUA IMAGEM
            alt="Grupo Remanescentes"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
