export interface SpecialtyItem {
  id: string;
  label: string;
  detail: string;
}

export interface ProfileConfig {
  fullName: string;
  shortName: string;
  brandLabel: string;
  handle: string;
  headline: string;
  subheadline: string;
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
  /**
   * Infraestructura lista para CV descargable futuro.
   * Mantener en null mientras no exista un PDF real en /public/cv/.
   */
  cvUrl: string | null;
  specialties: SpecialtyItem[];
  workPhilosophy: {
    title: string;
    description: string;
  }[];
  aboutNarrative: string[];
  /**
   * Estructura preparada para una futura extensión bilingüe (es/en)
   * sin exponer botones inactivos en la interfaz actual.
   */
  i18nReady: {
    activeLocale: 'es';
    availableLocales: readonly ['es'];
  };
}

export const profile: ProfileConfig = {
  fullName: 'Cristhian Alexis Sánchez Enríquez',
  shortName: 'Cristhian Sánchez',
  brandLabel: 'Cristhian Sánchez / Prolexis',
  handle: 'Prolexis',
  headline: 'Software full-stack, IA aplicada y sistemas de datos con arquitectura verificable.',
  subheadline:
    'Estudiante de Ingeniería de Sistemas en la Universidad Nacional de Trujillo (UNT). Diseño e integro plataformas web, APIs tipadas, flujos de automatización e inteligencia artificial con foco en seguridad, trazabilidad y rigor técnico.',
  university: 'Universidad Nacional de Trujillo (UNT)',
  faculty: 'Facultad de Ingeniería — Escuela Profesional de Ingeniería de Sistemas',
  career: 'Estudiante de Ingeniería de Sistemas',
  location: 'Trujillo, Perú',
  email: 'casanchezen@unitru.edu.pe',
  githubUrl: 'https://github.com/Prolexis',
  linkedinUrl: 'https://www.linkedin.com/in/cristhian-alexis-sanchez-enriquez-a69808319/',
  portraitPath: '/assets/cristhian-sanchez-retrato.webp',
  portraitAlt: 'Retrato profesional de Cristhian Alexis Sánchez Enríquez',
  availabilityStatus: 'Disponible para prácticas preprofesionales y roles junior',
  availabilityDetail:
    'Desarrollo full-stack (Next.js, NestJS, FastAPI), integración de LLMs con reglas de negocio, análisis de datos y seguridad aplicada.',
  cvUrl: null,
  specialties: [
    {
      id: 'fullstack',
      label: 'Full-Stack Web & APIs',
      detail: 'Next.js, React, TypeScript, NestJS y FastAPI con validación estricta y arquitectura modular.',
    },
    {
      id: 'ai',
      label: 'IA Aplicada & Explicabilidad',
      detail: 'Orquestación con LLMs (Claude, Gemini), LangChain, copilotos con herramientas autorizadas y XAI con TreeSHAP.',
    },
    {
      id: 'data',
      label: 'Datos & BI Transaccional',
      detail: 'PostgreSQL, SQL Server (T-SQL, vistas, SP), Prisma, SQLAlchemy y tableros ejecutivos con KPIs auditables.',
    },
    {
      id: 'security',
      label: 'Seguridad & Trazabilidad',
      detail: 'Análisis determinista sobre Active Directory (BloodHound), RBAC, auditoría append-only y evidencia criptográfica.',
    },
  ],
  workPhilosophy: [
    {
      title: 'Arquitectura antes que demos frágiles',
      description:
        'Cada proyecto separa la capa de interfaz de la lógica de negocio, la validación de entradas y el almacenamiento persistente o analítico.',
    },
    {
      title: 'IA acotada a herramientas y evidencia',
      description:
        'Cuando integro modelos de lenguaje o ML (Claude, Gemini, Random Forest / TreeSHAP), restringo el acceso mediante esquemas tipados, reglas deterministas y explicabilidad.',
    },
    {
      title: 'Honestidad sobre alcance y métricas',
      description:
        'Distingo claramente entre simulaciones académicas, pruebas experimentales y sistemas productivos, documentando limitaciones, avisos legales y pasos reales de ejecución.',
    },
  ],
  aboutNarrative: [
    'Me formo en Ingeniería de Sistemas en la Universidad Nacional de Trujillo (UNT), en Trujillo, Perú, construyendo proyectos que conectan desarrollo web full-stack, bases de datos relacionales e inteligencia artificial aplicada a problemas concretos.',
    'Mi trabajo reciente abarca desde plataformas con trazabilidad criptográfica y visión multimodal para programas sociales (VasoChain AI), gemelos digitales 3D con XAI para minería (MineSafe 3D) y motores geoespaciales ante riesgo hidrometeorológico (YAKU ALERT UNT), hasta auditoría determinista de identidad en Active Directory (Identity Risk AI) e inteligencia comercial sobre SQL Server (Establo AI Leads).',
    'En cada entrega priorizo código mantenible en TypeScript y Python, documentación clara en los repositorios y transparencia sobre qué se probó en laboratorio, qué fue trabajo colaborativo y cómo se valida cada sistema.',
  ],
  i18nReady: {
    activeLocale: 'es',
    availableLocales: ['es'],
  },
};
