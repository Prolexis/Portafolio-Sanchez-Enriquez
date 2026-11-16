export interface FocusArea {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  projects: { name: string; slug: string }[];
}

export interface ProfileConfig {
  monogram: string;
  fullName: string;
  shortName: string;
  handle: string;
  heroEyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroDescription: string;
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
  cvUrl: string | null;
  focusAreas: FocusArea[];
  aboutTitle: string;
  aboutParagraphs: string[];
  interests: string[];
  contactTitle: string;
  contactText: string;
}

export const profile: ProfileConfig = {
  monogram: 'CSE.',
  fullName: 'Cristhian Alexis Sánchez Enríquez',
  shortName: 'Cristhian Sánchez',
  handle: 'Prolexis',
  heroEyebrow: 'CRISTHIAN ALEXIS SÁNCHEZ ENRÍQUEZ',
  heroTitleLine1: 'Código que resuelve.',
  heroTitleLine2: 'Ideas que evolucionan.',
  heroSubtitle:
    'Desarrollo software, sistemas inteligentes y soluciones que conectan tecnología con problemas reales.',
  heroDescription:
    'Estudiante de Ingeniería de Sistemas en la Universidad Nacional de Trujillo. Enfoque en desarrollo full-stack, inteligencia artificial y soluciones basadas en datos.',
  heroAwardText: '3.er lugar nacional — Hackathon organizada por Syscoin, 2026.',
  university: 'Universidad Nacional de Trujillo',
  faculty: 'Facultad de Ingeniería — Escuela de Ingeniería de Sistemas',
  career: 'Estudiante de Ingeniería de Sistemas',
  location: 'Trujillo, Perú',
  email: 'casanchezen@unitru.edu.pe',
  githubUrl: 'https://github.com/Prolexis',
  linkedinUrl: 'https://www.linkedin.com/in/cristhian-alexis-sanchez-enriquez-a69808319/',
  portraitPath: '/assets/cristhian-sanchez-retrato.webp',
  portraitAlt: 'Retrato profesional de Cristhian Alexis Sánchez Enríquez',
  cvUrl: null,
  focusAreas: [
    {
      number: '01',
      title: 'Ingeniería de software',
      description:
        'Aplicaciones web tipadas, APIs modulares y flujos de usuario pensados para mantenerse claros y estables.',
      technologies: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Tailwind CSS'],
      projects: [
        { name: 'VasoChainAI', slug: 'vasochain-ai' },
        { name: 'Egresados System', slug: 'egresados-system' },
      ],
    },
    {
      number: '02',
      title: 'Inteligencia artificial y datos',
      description:
        'Integración de modelos predictivos explicables, visión computacional y consultas analíticas seguras.',
      technologies: ['Python', 'FastAPI', 'TreeSHAP', 'SQL Server', 'PostgreSQL'],
      projects: [
        { name: 'MineSafe 3D', slug: 'minesafe-3d' },
        { name: 'Establo AI Leads', slug: 'establo-ai-leads' },
      ],
    },
    {
      number: '03',
      title: 'Arquitectura e integración de sistemas',
      description:
        'Conexión entre motores analíticos, servicios externos, mapas geoespaciales y auditoría determinista.',
      technologies: ['Docker', 'Prisma', 'Leaflet', 'Git', 'APIs REST / tRPC'],
      projects: [
        { name: 'YAKU ALERT — UNT', slug: 'yaku-alert-unt' },
        { name: 'Identity Risk AI', slug: 'identity-risk-ai' },
      ],
    },
  ],
  aboutTitle: 'Tecnología clara para desafíos reales.',
  aboutParagraphs: [
    'Me interesa construir tecnología que sea útil, comprensible y capaz de resolver desafíos concretos. Mi formación en Ingeniería de Sistemas y el desarrollo de proyectos de software e inteligencia artificial me han permitido explorar distintas formas de convertir ideas en soluciones funcionales.',
    'Desde Trujillo, Perú, combino el aprendizaje universitario en la Universidad Nacional de Trujillo con la práctica constante en arquitectura web, bases de datos relacionales y sistemas inteligentes con código abierto.',
  ],
  interests: [
    'Desarrollo web full-stack',
    'Inteligencia artificial aplicada',
    'Ingeniería y analítica de datos',
    'Seguridad de identidades',
  ],
  contactTitle: 'La próxima buena idea puede empezar aquí.',
  contactText:
    'Abierto a prácticas preprofesionales, colaboración y proyectos de desarrollo de software e inteligencia artificial.',
};
