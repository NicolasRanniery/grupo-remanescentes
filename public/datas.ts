// 1. INTERFACE ATUALIZADA
export interface Reuniao {
  universidade: string;
  local: string;
  data: string; // formato ISO YYYY-MM-DD
  horario: string;
  tipo: string; // <-- Novo atributo
}

// 2. DADOS ATUALIZADOS
export const reunioes: Reuniao[] = [
  {
    universidade: "UFPA",
    local: "Mirante do Rio",
    data: "2025-10-22",
    horario: "13:00",
    tipo: "Encontro",
  },
  {
    universidade: "UFPA",
    local: "Mirante do Rio",
    data: "2025-10-24",
    horario: "11:00",
    tipo: "Encontro",
  },
  {
    universidade: "UFPA",
    local: "A definir",
    data: "2025-10-29",
    horario: "A definir",
    tipo: "Evangelismo",
  },
  {
    universidade: "UFPA",
    local: "Saúde - a definir",
    data: "2025-10-31",
    horario: "11:00",
    tipo: "Encontro",
  },
  {
    universidade: "UFRA",
    local: "Salão ao lado do RU",
    data: "2025-10-30",
    horario: "12:30",
    tipo: "Encontro",
  },
  {
    universidade: "UFRA",
    local: "Salão ao lado do RU",
    data: "2025-11-27",
    horario: "13:30",
    tipo: "Encontro",
  },
  {
    universidade: "UFRA",
    local: "Salão ao lado do RU",
    data: "2025-12-04",
    horario: "13:30",
    tipo: "Encontro",
  },
  {
    universidade: "UFRA",
    local: "Salão ao lado do RU",
    data: "2025-12-11",
    horario: "13:30",
    tipo: "Encontro",
  },
  {
    universidade: "UFRA",
    local: "Salão ao lado do RU",
    data: "2025-12-18",
    horario: "13:30",
    tipo: "Encontro",
  },
];
