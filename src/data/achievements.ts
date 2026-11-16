export type AchievementType =
  | 'Reconocimiento'
  | 'Constancia de participación'
  | 'Hackathon';

export interface AchievementItem {
  id: string;
  type: AchievementType;
  shortBadge: string;
  title: string;
  periodLabel: string;
  dateLabel: string;
  issuer: string;
  signers: string[];
  summary: string;
  integrityNote: string;
  relatedProjectSlug?: string;
  imagePath: string | null;
  imageAlt: string | null;
  featuredOnHome: boolean;
}

export const achievements: AchievementItem[] = [
  {
    id: 'syscoin-unt-2026',
    type: 'Reconocimiento',
    shortBadge: '3.er lugar nacional',
    title: '3.er lugar nacional — Hackathon organizada por Syscoin (2026)',
    periodLabel: 'Junio – julio de 2026',
    dateLabel: 'Trujillo, 22 de julio de 2026',
    issuer:
      'Escuela de Ingeniería de Sistemas — Universidad Nacional de Trujillo',
    signers: [
      'Dr. Juan Pedro Santos Fernández — Director (e) de la Escuela de Ingeniería de Sistemas',
      'Dr. Iván Reyes López — Decano de la Facultad de Ingeniería',
    ],
    summary:
      'Reconocimiento otorgado por la Escuela de Ingeniería de Sistemas de la Universidad Nacional de Trujillo tras obtener el tercer lugar a nivel nacional en la hackathon organizada por Syscoin con el proyecto VasoChainAI.',
    integrityNote:
      'Fotografía del certificado físico original con firmas y sellos institucionales de la UNT.',
    relatedProjectSlug: 'vasochain-ai',
    imagePath: '/assets/reconocimiento-syscoin-2026-firmado.png',
    imageAlt:
      'Fotografía del reconocimiento firmado y sellado por la Escuela de Ingeniería de Sistemas y la Facultad de Ingeniería de la UNT, otorgado a Cristhian Alexis Sánchez Enríquez por el 3.er lugar nacional con VasoChainAI',
    featuredOnHome: true,
  },
  {
    id: 'innova-norte-2026',
    type: 'Hackathon',
    shortBadge: 'Desafío 3 · La Libertad',
    title: 'Hackathon Innova Norte 3G 2026 — YAKU ALERT UNT',
    periodLabel: '2026',
    dateLabel: 'Trujillo, 2026',
    issuer: 'Hackathon Innova Norte 3G — Desafío 3',
    signers: [],
    summary:
      'Desarrollo colaborativo del prototipo geoespacial YAKU ALERT UNT para monitoreo de corredores hídricos y respuesta preventiva en Trujillo y campus UNT bajo el enfoque de la Ley N.° 29664.',
    integrityNote:
      'Prototipo académico e informativo; no reemplaza alertas oficiales de SENAMHI, COEN ni INDECI.',
    relatedProjectSlug: 'yaku-alert-unt',
    imagePath: null,
    imageAlt: null,
    featuredOnHome: false,
  },
  {
    id: 'sql-server-2025',
    type: 'Constancia de participación',
    shortBadge: '12 horas · 2025',
    title: 'SQL Server Fundamentals — Lima Educa / Perú Digital',
    periodLabel: '6 al 27 de febrero de 2025',
    dateLabel: 'Lima, abril de 2025',
    issuer: 'Lima Educa / Perú Digital — Programa de Alfabetización Digital (RPCC)',
    signers: ['Jherry Jesus Guerra Bravo — Director de Proyectos, RPCC'],
    summary:
      'Constancia de participación en el curso virtual SQL Server Fundamentals (12 horas cronológicas), orientado a modelado relacional y consultas T-SQL.',
    integrityNote:
      'Constancia de participación emitida por Lima Educa / Perú Digital.',
    relatedProjectSlug: 'establo-ai-leads',
    imagePath: '/assets/constancia-sql-server-2025.png',
    imageAlt:
      'Constancia de participación en SQL Server Fundamentals emitida a nombre de Cristhian Alexis Sánchez Enríquez por Lima Educa y Perú Digital',
    featuredOnHome: true,
  },
];
