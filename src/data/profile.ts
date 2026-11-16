export interface EditorialPillar {
  number: string;
  title: string;
  description: string;
}

export interface ProfileConfig {
  monogram: string;
  fullName: string;
  shortName: string;
  handle: string;
  heroEyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubheadline: string;
  heroAwardTag: string;
  heroAwardText: string;
  university: string;
  faculty: string;
  career: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  portraitPath: string;
  portraitAlt: string;
  availabilityStatus: string;
  availabilityDetail: string;
  cvUrl: string | null;
  pillars: EditorialPillar[];
  interests: string[];
  aboutNarrative: string[];
  contactHeadline: string;
  contactSubheadline: string;
}

export const profile: ProfileConfig = {
  monogram: 'CSE.',
  fullName: 'Cristhian Alexis Sánchez Enríquez',
  shortName: 'Cristhian Sánchez',
  handle: 'Prolexis',
  heroEyebrow: 'CRISTHIAN SÁNCHEZ / SOFTWARE & AI',
  heroTitleLine1: 'Software con propósito.',
  heroTitleLine2: 'Inteligencia aplicada.',
  heroSubheadline:
    'Soy Cristhian Alexis Sánchez Enríquez, estudiante de Ingeniería de Sistemas en la Universidad Nacional de Trujillo. Desarrollo aplicaciones, sistemas inteligentes y soluciones que responden a problemas reales.',
  heroAwardTag: '03 / Premio nacional',
  heroAwardText: '3.er lugar — Hackathon Syscoin 2026',
  university: 'Universidad Nacional de Trujillo',
  faculty: 'Facultad de Ingeniería — Escuela Profesional de Ingeniería de Sistemas',
  career: 'Estudiante de Ingeniería de Sistemas',
  location: 'Trujillo, Perú',
  email: 'casanchezen@unitru.edu.pe',
  githubUrl: 'https://github.com/Prolexis',
  linkedinUrl: 'https://www.linkedin.com/in/cristhian-alexis-sanchez-enriquez-a69808319/',
  portraitPath: '/assets/cristhian-sanchez-retrato.webp',
  portraitAlt: 'Retrato profesional de Cristhian Alexis Sánchez Enríquez',
  availabilityStatus: 'Disponible para prácticas preprofesionales y proyectos de ingeniería',
  availabilityDetail:
    'Desarrollo full-stack, APIs tipadas, integración aplicada de modelos de IA y sistemas de datos.',
  cvUrl: null,
  pillars: [
    {
      number: '01',
      title: 'Software Engineering',
      description:
        'Diseño y desarrollo de aplicaciones web, APIs y sistemas escalables.',
    },
    {
      number: '02',
      title: 'Artificial Intelligence',
      description:
        'Machine Learning, visión computacional y soluciones basadas en IA.',
    },
    {
      number: '03',
      title: 'Systems & Innovation',
      description:
        'Integración de tecnologías para resolver problemas empresariales, académicos y sociales.',
    },
  ],
  interests: [
    'Arquitectura web full-stack y APIs tipadas',
    'IA aplicada con trazabilidad y explicabilidad',
    'Sistemas de datos, SQL Server y analítica operativa',
    'Seguridad defensiva e integridad de identidades',
  ],
  aboutNarrative: [
    'Estudio Ingeniería de Sistemas en la Universidad Nacional de Trujillo (UNT), en Trujillo, Perú. Mi enfoque combina desarrollo full-stack, modelado de datos e inteligencia artificial aplicada sobre problemas concretos.',
    'He trabajado en soluciones que abarcan desde trazabilidad para programas sociales con verificación multimodal (VasoChainAI) y gemelos digitales explicables (MineSafe 3D), hasta plataformas geoespaciales ante lluvias extremas (YAKU ALERT UNT), auditoría determinista en Active Directory e inteligencia comercial sobre SQL Server.',
    'Creo en construir software claro, honesto sobre su alcance y fácil de auditar en código.',
  ],
  contactHeadline: '¿Construimos algo que realmente importe?',
  contactSubheadline:
    'Si buscas colaboración técnica, prácticas preprofesionales o conversar sobre desarrollo de software e inteligencia artificial, escríbeme directamente.',
};
