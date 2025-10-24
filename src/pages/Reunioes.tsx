import { useState } from "react";

interface Reuniao {
  id: number;
  universidade: string;
  local: string;
  dia: string;
  horario: string;
}

const reunioes: Reuniao[] = [
  { id: 1, universidade: "UFPA", local: "Bloco A - Sala 101", dia: "Segunda-feira", horario: "18:00" },
  { id: 2, universidade: "UFRA", local: "Auditório Central", dia: "Terça-feira", horario: "17:30" },
  { id: 3, universidade: "UEPA", local: "Bloco B - Sala 202", dia: "Quarta-feira", horario: "18:30" },
  { id: 4, universidade: "UFPA", local: "Bloco A - Sala 105", dia: "Quinta-feira", horario: "18:00" },
];

export default function Reunioes() {
  const [filtro, setFiltro] = useState<string>("Todas");

  const universidades = ["Todas", "UFPA", "UFRA", "UEPA"];

  const reunioesFiltradas =
    filtro === "Todas"
      ? reunioes
      : reunioes.filter((r) => r.universidade === filtro);

  return (
    <section className="relative flex-1 flex flex-col bg-[#e9ded2] p-6 md:p-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#303030] font-texgyretermes italic">
        Confira os locais e horários das nossas reuniões
      </h1>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-gray-700">
          Filtrar por universidade:
        </label>
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="p-2 rounded-md border border-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {universidades.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reunioesFiltradas.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {r.universidade}
            </h2>
            <p className="text-gray-700">
              📍 <strong>Local:</strong> {r.local}
            </p>
            <p className="text-gray-700">
              📅 <strong>Dia:</strong> {r.dia}
            </p>
            <p className="text-gray-700">
              ⏰ <strong>Horário:</strong> {r.horario}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
