export type AchievementType =
  | 'Reconocimiento académico'
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
    type: 'Reconocimiento académico',
    shortBadge: '3.er lugar nacional',
    title: 'Reconocimiento por 3.er lugar nacional — Hackathon de IA Syscoin (VasoChainAI)',
    periodLabel: 'Junio – julio de 2026',
    dateLabel: 'Trujillo, 22 de julio de 2026',
    issuer:
      'Escuela Profesional de Ingeniería de Sistemas — Universidad Nacional de Trujillo (UNT)',
    signers: [
      'Dr. Juan Pedro Santos Fernández — Director (e) de la Escuela de Ingeniería de Sistemas (UNT)',
      'Dr. Iván Reyes López — Decano de la Facultad de Ingeniería (UNT)',
    ],
    summary:
      'Reconocimiento otorgado por la Escuela de Ingeniería de Sistemas de la Universidad Nacional de Trujillo por haber obtenido el tercer lugar a nivel nacional en la Hackathon de Inteligencia Artificial organizada por Syscoin con el proyecto VasoChainAI.',
    integrityNote:
      'Documento institucional emitido por la Escuela de Ingeniería de Sistemas de la UNT (no emitido directamente por Syscoin). Se exhibe la fotografía del documento físico original con firmas manuscritas y sellos azules intactos.',
    relatedProjectSlug: 'vasochain-ai',
    imagePath: '/assets/reconocimiento-syscoin-2026-firmado.png',
    imageAlt:
      'Fotografía del reconocimiento físico firmado y sellado por autoridades de la Escuela de Ingeniería de Sistemas y la Facultad de Ingeniería de la UNT, otorgado a Cristhian Alexis Sánchez Enríquez por el 3.er lugar nacional con VasoChainAI',
    featuredOnHome: true,
  },
  {
    id: 'innova-norte-2026',
    type: 'Hackathon',
    shortBadge: 'Desafío 3 · La Libertad',
    title: 'Hackathon Innova Norte 3G 2026 — Prototipo YAKU ALERT UNT',
    periodLabel: '2026',
    dateLabel: 'Trujillo, 2026',
    issuer: 'Hackathon Innova Norte 3G — Desafío 3 (riesgo hidrometeorológico en Trujillo y UNT)',
    signers: [],
    summary:
      'Desarrollo colaborativo del prototipo geoespacial YAKU ALERT UNT para modelado de corredores hídricos, escenarios de lluvia extrema y protocolos preventivos universitarios alineados con la Ley N.° 29664 (SINAGERD).',
    integrityNote:
      'Respaldado en el repositorio del proyecto con su mapa interactivo en Leaflet, motor FastAPI/Shapely y pruebas automatizadas en pytest. Prototipo informativo que no reemplaza a SENAMHI, COEN ni INDECI.',
    relatedProjectSlug: 'yaku-alert-unt',
    imagePath: null,
    imageAlt: null,
    featuredOnHome: false,
  },
  {
    id: 'sql-server-2025',
    type: 'Constancia de participación',
    shortBadge: '12 horas cronológicas',
    title: 'Constancia de participación en SQL Server Fundamentals',
    periodLabel: 'Del 6 al 27 de febrero de 2025',
    dateLabel: 'Lima, abril de 2025',
    issuer: 'Lima Educa / Perú Digital — Programa de Alfabetización Digital (RPCC)',
    signers: ['Jherry Jesus Guerra Bravo — Director de Proyectos, RPCC'],
    summary:
      'Participación acreditada en el taller virtual SQL Server Fundamentals (12 horas cronológicas), reforzando modelado relacional, consultas T-SQL y lógica de vistas y procedimientos para sistemas analíticos.',
    integrityNote:
      'Constancia de participación emitida por Lima Educa / Perú Digital (RPCC); no se presenta ni equivale a una certificación oficial de Microsoft.',
    relatedProjectSlug: 'establo-ai-leads',
    imagePath: '/assets/constancia-sql-server-2025.png',
    imageAlt:
      'Constancia de participación en SQL Server Fundamentals emitida a nombre de Cristhian Alexis Sánchez Enríquez por Lima Educa y Perú Digital, firmada en Lima en abril de 2025',
    featuredOnHome: true,
  },
];
