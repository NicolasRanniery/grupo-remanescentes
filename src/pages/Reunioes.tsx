import { useState } from "react";
// Assumindo que seu arquivo de dados está em ../../public/datas.ts
import { reunioes } from "../../public/datas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Reunioes() {
  const [filtro, setFiltro] = useState("todas");

  // Filtrar
  const reunioesFiltradas =
    filtro === "todas"
      ? reunioes
      : reunioes.filter((r) => r.universidade === filtro);

  // --- CORREÇÃO 1: ORDENAÇÃO ROBUSTA ---
  const reunioesOrdenadas = [...reunioesFiltradas].sort((a, b) => {
    // Usa "00:00" como fallback se o horário não estiver definido
    const horaA = a.horario === "A definir" ? "00:00" : a.horario;
    const horaB = b.horario === "A definir" ? "00:00" : b.horario;

    const dateA = new Date(`${a.data}T${horaA}`);
    const dateB = new Date(`${b.data}T${horaB}`);

    // Checagem para datas inválidas (ex: data: "A definir")
    const aValida = !isNaN(dateA.getTime());
    const bValida = !isNaN(dateB.getTime());

    if (aValida && !bValida) return -1; // Datas válidas vêm primeiro
    if (!aValida && bValida) return 1; // Datas inválidas vão para o fim
    if (!aValida && !bValida) return 0; // Duas inválidas, ordem indiferente

    return dateA.getTime() - dateB.getTime();
  });

  const hoje = new Date();

  return (
    <>
      <Header />
      <section className="relative flex-1 flex flex-col bg-[#e9ded2]">
        <div className="text-left px-4 sm:px-8 pt-10 mb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-4 text-[#303030] font-texgyretermes italic">
            Confira os locais e horários das nossas reuniões:
          </h1>

          {/* FILTRO */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["todas", "UFPA", "UFRA", "UNIFAMAZ"].map((uni) => (
              <button
                key={uni}
                onClick={() => setFiltro(uni)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  filtro === uni
                    ? "bg-[#303030] text-[#e9ded2]"
                    : "bg-[#e9ded2] text-[#303030] border border-[#303030]"
                }`}
              >
                {uni === "todas" ? "Todas" : uni}
              </button>
            ))}
          </div>

          {/* --- LISTA DE REUNIÕES COM MENSAGEM DE "VAZIO" --- */}
          {reunioesOrdenadas.length > 0 ? (
            // SE TIVER REUNIÕES, MOSTRA O GRID
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {reunioesOrdenadas.map((r, index) => {
                // --- CORREÇÃO 2: RENDERIZAÇÃO ROBUSTA ---

                const temHorarioDefinido = r.horario !== "A definir";
                const horaParaDate = temHorarioDefinido ? r.horario : "00:00";
                const dataObj = new Date(`${r.data}T${horaParaDate}`);
                const dataValida = !isNaN(dataObj.getTime());

                // Se a data for inválida (ex: "A definir"), renderiza um card especial
                if (!dataValida) {
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl shadow-md border border-gray-300 bg-gray-100 opacity-80"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold text-lg">{r.universidade}</h2>
                        <span className="bg-[#303030] text-[#e9ded2] text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
                          {r.tipo}
                        </span>
                      </div>
                      <p>📍 {r.local}</p>
                      <p className="capitalize">📅 Data: {r.data}</p>
                      <p>⏰ Horário: {r.horario}</p>
                      <p className="mt-2 text-sm italic text-gray-600">
                        ℹ️ Pendente de definição
                      </p>
                    </div>
                  );
                }

                // Se chegou aqui, a data é válida.
                let realizado = false;
                if (temHorarioDefinido) {
                  // Compara com a hora exata
                  realizado = dataObj < hoje;
                } else {
                  // Sem horário, só marca como realizado se o DIA INTEIRO já passou
                  const fimDoDia = new Date(`${r.data}T23:59:59`);
                  realizado = fimDoDia < hoje;
                }

                const dataFormatada = dataObj.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  weekday: "long",
                });

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl shadow-md border border-gray-300 transition ${
                      realizado
                        ? "bg-gray-200 line-through text-gray-500 opacity-70"
                        : "bg-white hover:shadow-lg"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-bold text-lg">{r.universidade}</h2>
                      <span className="bg-[#303030] text-[#e9ded2] text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
                        {r.tipo}
                      </span>
                    </div>
                    <p>📍 {r.local}</p>
                    <p className="capitalize">📅 {dataFormatada}</p>
                    <p>⏰ Horário: {r.horario}</p>
                    {realizado && (
                      <p className="mt-2 text-sm italic text-gray-600">
                        ✅ Reunião já realizada
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            // SE NÃO TIVER REUNIÕES, MOSTRA A MENSAGEM
            <div className="text-center p-8 bg-white/70 rounded-xl shadow-sm border border-gray-300 flex flex-col items-center justify-center flex-1 px-6 py-6">
              <img
                src="/assets/jesus_reuniao.svg"
                alt="Jesus Reunião"
                className="w-40 h-auto mb-6 md:w-56 lg:w-64"
              />

              {/* --- TEXTO ALTERADO --- */}
              <h3 className="text-2xl font-bold text-[#303030] font-texgyretermes">
                Aguarde o tempo certo
              </h3>
              <p className="text-gray-600 mt-2 max-w-md mx-auto">
                {filtro === "todas"
                  ? "Ainda não há novas reuniões agendadas."
                  : `No momento, não há reuniões marcadas para ${filtro}.`}
                <br />
                Fique em paz, em breve teremos novidades!
              </p>

              <p className="text-gray-500 italic mt-6 text-sm max-w-lg mx-auto">
                "Tudo tem o seu tempo determinado, e há tempo para todo o
                propósito debaixo do céu." (Eclesiastes 3:1)
              </p>
              {/* --- FIM DA ALTERAÇÃO --- */}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
