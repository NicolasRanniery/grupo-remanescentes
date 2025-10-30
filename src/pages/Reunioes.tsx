import { useEffect, useState } from "react";

interface Reuniao {
  universidade: string;
  local: string;
  data: string;
  horario: string;
  tipo: string;
}

export default function Reunioes() {
  const [filtro, setFiltro] = useState("todas");
  const [reunioes, setReunioes] = useState<Reuniao[]>([]);
  const [loading, setLoading] = useState(true);

  const SHEET_ID = import.meta.env.VITE_SHEET_ID;
  const SHEET_NAME = import.meta.env.VITE_SHEET_NAME;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;
        const res = await fetch(url);
        const text = await res.text();

        const json = JSON.parse(text.substr(47).slice(0, -2));

        // Pula a primeira linha (cabeçalho)
        const rows = json.table.rows
          .slice(1)
          .map((r: any) => ({
            universidade: r.c[0]?.v || "",
            local: r.c[1]?.v || "",
            data: r.c[2]?.v || "",
            horario: r.c[3]?.v || "",
            tipo: r.c[4]?.v || "",
          }))
          // Filtra linhas completamente vazias
          .filter(
            (r: Reuniao) =>
              r.universidade || r.local || r.data || r.horario || r.tipo
          );

        setReunioes(rows);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const reunioesFiltradas =
    filtro === "todas"
      ? reunioes
      : reunioes.filter((r) => r.universidade === filtro);

  const reunioesOrdenadas = [...reunioesFiltradas].sort((a, b) => {
    const horaA = a.horario === "A definir" ? "00:00" : a.horario;
    const horaB = b.horario === "A definir" ? "00:00" : b.horario;

    const dateA = new Date(`${a.data}T${horaA}`);
    const dateB = new Date(`${b.data}T${horaB}`);

    const aValida = !isNaN(dateA.getTime());
    const bValida = !isNaN(dateB.getTime());

    if (aValida && !bValida) return -1;
    if (!aValida && bValida) return 1;
    if (!aValida && !bValida) return 0;

    return dateA.getTime() - dateB.getTime();
  });

  const hoje = new Date();

  return (
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

        {/* LOADING */}
        {loading && (
          <div className="text-center text-gray-600 italic mb-6">
            Carregando reuniões...
          </div>
        )}

        {/* LISTA DE REUNIÕES */}
        {!loading && (
          <>
            {reunioesOrdenadas.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {reunioesOrdenadas.map((r, index) => {
                  const temHorarioDefinido = r.horario !== "A definir";
                  const horaParaDate = temHorarioDefinido ? r.horario : "00:00";
                  const dataObj = new Date(`${r.data}T${horaParaDate}`);
                  const dataValida = !isNaN(dataObj.getTime());

                  if (!dataValida) {
                    return (
                      <div
                        key={index}
                        className="p-4 rounded-xl shadow-md border border-gray-300 bg-gray-100 opacity-80"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h2 className="font-bold text-lg">
                            {r.universidade}
                          </h2>
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

                  let realizado = false;
                  if (temHorarioDefinido) {
                    realizado = dataObj < hoje;
                  } else {
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
                          ✅ Evento já realizado
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center p-8 bg-white/70 rounded-xl shadow-sm border border-gray-300 flex flex-col items-center justify-center flex-1 px-6 py-6">
                <img
                  src="/assets/jesus_reuniao.svg"
                  alt="Jesus Reunião"
                  className="w-40 h-auto mb-6 md:w-56 lg:w-64"
                />
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
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
