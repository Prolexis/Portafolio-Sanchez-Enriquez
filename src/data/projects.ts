export type ProjectCategory = 'IA' | 'Web' | 'Seguridad' | 'Datos' | 'Hackathons';

export type ArchitectureDiagramKind = 'vasochain' | 'yaku-alert' | 'egresados';

export type CoverVisualKind =
  | 'vasochain-product'
  | 'minesafe-3d'
  | 'yaku-map'
  | 'egresados-portal';

export interface ProjectVisual {
  src: string;
  alt: string;
  caption: string;
}

export interface FlagshipProject {
  slug: string;
  indexLabel: string;
  order: number;
  name: string;
  shortTitle: string;
  tagline: string;
  editorialSubtitle: string;
  categories: ProjectCategory[];
  year: string;
  status: string;
  collaborationNote: string;
  roleVerified: string;
  recognitionBadge?: string;
  relatedAchievementId?: string;
  repoUrl: string;
  liveDemoUrl?: string;
  liveDemoLabel?: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  coverIllustration?: CoverVisualKind;
  architectureKind?: ArchitectureDiagramKind;
  visuals: ProjectVisual[];
  problem: string;
  solution: string;
  architectureSummary: string[];
  confirmedStack: string[];
  previewTags: string[];
  implementedFeatures: string[];
  howToVerify: string[];
  challengesAndLearnings: string[];
  verifiedResults: string[];
  disclaimer?: string;
}

export interface SecondaryProject {
  slug: string;
  name: string;
  categories: ProjectCategory[];
  summary: string;
  stack: string[];
  repoUrl: string;
  liveDemoUrl?: string;
  status: string;
}

export const projectFilterCategories: readonly ('Todos' | ProjectCategory)[] = [
  'Todos',
  'IA',
  'Web',
  'Seguridad',
  'Datos',
  'Hackathons',
];

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: 'vasochain-ai',
    indexLabel: '01',
    order: 1,
    name: 'VasoChainAI',
    shortTitle: 'VasoChainAI — IA, Blockchain y Supervisión Social',
    tagline:
      'Supervisión transparente del Programa Vaso de Leche mediante verificación visual de entregas, WhatsApp y registro inmutable en blockchain.',
    editorialSubtitle: 'IA, blockchain y trazabilidad social',
    categories: ['IA', 'Web', 'Hackathons', 'Seguridad'],
    year: '2026',
    status: '3.er lugar nacional · Hackathon Syscoin 2026',
    collaborationNote:
      'Proyecto desarrollado para la Hackathon de Inteligencia Artificial organizada por Syscoin (junio–julio de 2026). Galardonado con el 3.er lugar nacional.',
    roleVerified:
      'Arquitectura full-stack entre cliente React, API modular NestJS/Prisma, contrato inteligente DeliveryRegistry.sol y verificación multimodal.',
    recognitionBadge: '3.er lugar nacional · Hackathon Syscoin 2026',
    relatedAchievementId: 'syscoin-unt-2026',
    repoUrl: 'https://github.com/Prolexis/vasochainAI',
    coverIllustration: 'vasochain-product',
    architectureKind: 'vasochain',
    visuals: [],
    problem:
      'Los programas municipales de asistencia alimentaria enfrentan brechas entre la entrega física de raciones y su auditoría administrativa.',
    solution:
      'Plataforma que integra reporte por WhatsApp, verificación fotográfica con Claude Vision, registro relacional en PostgreSQL y anclaje criptográfico en DeliveryRegistry.sol.',
    architectureSummary: [
      'Frontend React + Vite + Tailwind CSS (:5174) para monitoreo de beneficiarios, entregas y auditoría.',
      'Backend NestJS + Prisma ORM (:3001) con módulos de auth, beneficiarios, entregas, controles, blockchain, IA, whatsapp y harness.',
      'PostgreSQL (:5433) separado del nodo Hardhat (:8545) que ejecuta DeliveryRegistry.sol.',
      'Arnés automatizado de 13 controles y simulador local de WhatsApp.',
    ],
    confirmedStack: [
      'React',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Solidity / Hardhat',
      'Claude Vision',
      'Docker Compose',
    ],
    previewTags: ['React', 'NestJS', 'Solidity'],
    implementedFeatures: [
      'Registro inmutable de hashes de entrega mediante DeliveryRegistry.sol.',
      'Validación visual de comprobantes de entrega con Claude Vision.',
      'Canal conversacional compatible con simulador local de WhatsApp, Whapi y Twilio.',
      'Arnés de 13 controles internos en backend.',
    ],
    howToVerify: [
      'Revisar backend/src y DeliveryRegistry.sol en github.com/Prolexis/vasochainAI.',
      'Levantar la pila de 4 servicios con Docker Compose en entorno local.',
    ],
    challengesAndLearnings: [
      'Desacoplar la operación transaccional en PostgreSQL del sellado criptográfico on-chain.',
      'Diseñar un simulador local y arnés de 13 controles para demostrar todo el flujo sin costos externos.',
    ],
    verifiedResults: [
      '3.er lugar nacional en la Hackathon de IA organizada por Syscoin (2026).',
      'Reconocimiento emitido el 22 de julio de 2026 por la Escuela de Ingeniería de Sistemas de la UNT.',
    ],
  },
  {
    slug: 'minesafe-3d',
    indexLabel: '02',
    order: 2,
    name: 'MineSafe 3D',
    shortTitle: 'MineSafe 3D — Gemelo Digital Explicable en Minería',
    tagline:
      'Gemelo digital tridimensional en Three.js e IA explicable (TreeSHAP) para simular y auditar riesgo de colisión en flotas mineras mixtas.',
    editorialSubtitle: 'Gemelo digital 3D y predicción explicable (XAI)',
    categories: ['IA', 'Datos', 'Web'],
    year: '2026',
    status: 'Prototipo experimental + pipeline CRISP-DM reproducible',
    collaborationNote:
      'Proyecto de ingeniería aplicada con experimentos reproducibles y dataset sintético en Zenodo.',
    roleVerified:
      'Escena interactiva 3D en React/Three.js, microservicio FastAPI, atribución TreeSHAP y documentación de límites experimentales.',
    repoUrl: 'https://github.com/Prolexis/gemelo-digital-prototipo',
    coverIllustration: 'minesafe-3d',
    visuals: [
      {
        src: '/assets/projects/minesafe-shap.png',
        alt: 'Atribución causal global TreeSHAP en MineSafe 3D sobre dataset sintético',
        caption:
          'Ranking global TreeSHAP: distancia LiDAR y velocidad GNSS lideran la atribución de riesgo en simulación.',
      },
      {
        src: '/assets/projects/minesafe-architecture.png',
        alt: 'Arquitectura técnica de 4 capas de MineSafe 3D',
        caption:
          'Arquitectura experimental de cuatro capas (Three.js, FastAPI, TreeSHAP, Redis y PostGIS).',
      },
    ],
    problem:
      'Los modelos de alerta opacos no explican qué variable geométrica o de fatiga dispara una advertencia de proximidad entre camiones manuales y autónomos.',
    solution:
      'Escena 3D interactiva en React 19 + Three.js conectada a FastAPI con Random Forest + TreeSHAP, RBAC, reportes PDF y asistente Gemini 2.5 Flash.',
    architectureSummary: [
      'Frontend React 19, TypeScript y Three.js WebGL servido detrás de Nginx.',
      'Microservicio FastAPI (/api/gemini/health, /analyze-risk, /chat) con RBAC y exportación PDF.',
      'Laboratorio experimental (/experiments/run_all.py) con TreeSHAP global y local.',
      'Dataset sintético abierto DSTM-MineSafe-2026.csv (n = 5,000, Zenodo DOI 10.5281/zenodo.22905230).',
    ],
    confirmedStack: [
      'React 19',
      'TypeScript',
      'Three.js',
      'Python',
      'FastAPI',
      'TreeSHAP',
      'Docker',
    ],
    previewTags: ['Three.js', 'FastAPI', 'TreeSHAP'],
    implementedFeatures: [
      'Simulación tridimensional de flotas con indicadores de proximidad.',
      'Explicabilidad causal global y local mediante TreeSHAP.',
      'Control RBAC y exportación de reportes técnicos en PDF.',
    ],
    howToVerify: [
      'Ejecutar /experiments/run_all.py sobre DSTM-MineSafe-2026.csv desde github.com/Prolexis/gemelo-digital-prototipo.',
    ],
    challengesAndLearnings: [
      'Desacoplar la fluidez WebGL en Three.js de las inferencias explicables en Python.',
      'Documentar explícitamente la frontera entre benchmark sintético y validación en faena real.',
    ],
    verifiedResults: [
      'En simulación controlada sobre DSTM-MineSafe-2026 se midió AUC-ROC 0.942 con FPR 4.8% y reducción simulada de evaluación de 6.4 s a 1.8 s.',
    ],
    disclaimer:
      'Aviso científico: las métricas reportadas provienen exclusivamente de simulación experimental sobre el dataset sintético DSTM-MineSafe-2026 (n = 5,000). No representa validación comercial ni certificación ISO 21815 / MSHA.',
  },
  {
    slug: 'yaku-alert-unt',
    indexLabel: '03',
    order: 3,
    name: 'YAKU ALERT — UNT',
    shortTitle: 'YAKU ALERT — Plataforma Geoespacial Preventiva',
    tagline:
      'Monitoreo preventivo, mapas de corredores hídricos y respuesta ante lluvias extremas en Trujillo y campus UNT.',
    editorialSubtitle: 'Hackathon Innova Norte 3G 2026 · Desafío 3',
    categories: ['Web', 'Datos', 'Hackathons'],
    year: '2026',
    status: 'Prototipo de hackathon · FastAPI + Leaflet + pytest',
    collaborationNote:
      'Desarrollado colaborativamente para la Hackathon Innova Norte 3G 2026 (Desafío 3).',
    roleVerified:
      'Tres vistas espaciales en React + Leaflet, motor geométrico en FastAPI + Shapely y modo offline de respaldo.',
    repoUrl: 'https://github.com/Prolexis/yaku-alert-unt',
    coverIllustration: 'yaku-map',
    architectureKind: 'yaku-alert',
    visuals: [],
    problem:
      'Ante lluvias intensas en Trujillo, se requiere visualizar corredores hídricos y rutas preventivas sin confundir escenarios académicos simulados con alertas oficiales.',
    solution:
      'Aplicación React + Leaflet con tres vistas (Monitoreo, Mapa y Escenarios, Prevención y Respuesta), respaldada por FastAPI + Shapely 2.x y Open-Meteo con fallback offline.',
    architectureSummary: [
      'Frontend React + Vite + Tailwind + Leaflet (:8080) organizado en tres vistas operativas.',
      'Backend espacial FastAPI + Shapely 2.x (:8000) verificado con pytest.',
      'Ingesta meteorológica Open-Meteo IPv4 con respaldo offline automático.',
    ],
    confirmedStack: [
      'React',
      'Leaflet',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'Shapely',
      'Docker',
    ],
    previewTags: ['React', 'Leaflet', 'FastAPI'],
    implementedFeatures: [
      'Panel de monitoreo, cartografía de escenarios y guía de respuesta UNT.',
      'Separación explícita entre pronóstico externo y escenario sintético.',
      'Sin captura de GPS ni datos personales del visitante.',
    ],
    howToVerify: [
      'Inspeccionar el repositorio github.com/Prolexis/yaku-alert-unt y su batería pytest.',
    ],
    challengesAndLearnings: [
      'Evitar ambigüedad visual entre datos meteorológicos reales y escenarios hipotéticos.',
    ],
    verifiedResults: [
      'Prototipo funcional presentado en la Hackathon Innova Norte 3G 2026 con backend cubierto por pytest.',
    ],
    disclaimer:
      'Aviso legal (Ley N.° 29664 — SINAGERD): prototipo informativo y académico. No sustituye avisos oficiales de SENAMHI, COEN, INDECI ni Defensa Civil UNT.',
  },
  {
    slug: 'establo-ai-leads',
    indexLabel: '04',
    order: 4,
    name: 'Establo AI Leads',
    shortTitle: 'Establo AI Leads — Inteligencia Comercial y SQL Server',
    tagline:
      'Tablero operativo e inteligencia comercial acotada a 12 herramientas autorizadas sobre SQL Server V3 para conversión LEAD → PAYER.',
    editorialSubtitle: 'Analítica comercial y copiloto seguro SQL',
    categories: ['Datos', 'IA', 'Web'],
    year: '2026',
    status: 'Proyecto académico BI · Next.js 15 + SQL Server 2019+',
    collaborationNote:
      'Proyecto académico de Inteligencia de Negocios para Parrilladas El Establo (Trujillo).',
    roleVerified:
      'Dashboard ejecutivo en Next.js 15, pool parametrizado mssql sin SQL libre y 12 herramientas seguras para el copiloto.',
    relatedAchievementId: 'sql-server-2025',
    repoUrl: 'https://github.com/Prolexis/establo-ai-leads',
    coverImage: {
      src: '/assets/projects/establo-ui.png',
      alt: 'Interfaz web real de Establo AI Leads mostrando KPIs TCP, TEN y TPN y seguimiento comercial',
    },
    visuals: [
      {
        src: '/assets/projects/establo-ui.png',
        alt: 'Interfaz web real de Establo AI Leads',
        caption: 'Vista principal del panel de control en Next.js 15 conectado a SQL Server V3.',
      },
      {
        src: '/assets/projects/establo-dashboard.png',
        alt: 'Reporte ejecutivo de la fase LEADS con métricas simuladas',
        caption: 'Reporte analítico LEAD → PAYER con rotulado explícito de datos simulados.',
      },
      {
        src: '/assets/projects/establo-arquitectura.png',
        alt: 'Arquitectura técnica de Establo AI sobre SQL Server V3',
        caption: 'Aislamiento del copiloto mediante 12 herramientas y vistas parametrizadas (sin SQL libre).',
      },
    ],
    problem:
      'Permitir que un modelo generativo ejecute SQL arbitrario sobre bases comerciales abre riesgos de inyección y métricas inconsistentes.',
    solution:
      'Aplicación Next.js 15 conectada vía pool parametrizado mssql a vistas auditables en SQL Server V3 (34 tablas, 9 vistas) con copiloto limitado a 12 herramientas seguras.',
    architectureSummary: [
      '9 módulos operativos en Next.js 15 App Router, React, TypeScript y Tailwind CSS.',
      'Pool parametrizado mssql sobre base buyer V3 con semáforo de seguimiento 24h/48h/72h.',
      'Validación Zod y vigencia promocional en zona horaria America/Lima.',
    ],
    confirmedStack: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'SQL Server',
      'Google Gemini',
    ],
    previewTags: ['Next.js', 'SQL Server', 'TypeScript'],
    implementedFeatures: [
      'KPIs auditables (TCP, TEN, TPN) calculados desde vistas SQL Server.',
      '12 herramientas seguras sin exposición directa de SQL libre.',
      'Perfil 360° enfocado exclusivamente al ciclo LEAD → PAYER.',
    ],
    howToVerify: [
      'Revisar vistas, validadores Zod y herramientas autorizadas en github.com/Prolexis/establo-ai-leads.',
    ],
    challengesAndLearnings: [
      'Aislar al LLM del motor relacional mediante contratos estrictos de herramientas.',
    ],
    verifiedResults: [
      'Validación académica completa sobre esquema SQL Server V3 (17 personas y 19 ciclos simulados).',
    ],
    disclaimer:
      'Datos académicos y simulados: las cifras corresponden al entorno buyer V3 y no a facturación comercial real.',
  },
  {
    slug: 'identity-risk-ai',
    indexLabel: '05',
    order: 5,
    name: 'Caso16 Identity Risk AI',
    shortTitle: 'Caso16 Identity Risk AI — Riesgos de Identidad y Ciberseguridad',
    tagline:
      'Auditoría determinista en modo lectura sobre Active Directory (SharpHound/BloodHound) con score 0–100 y bitácora inmutable.',
    editorialSubtitle: 'Riesgos de identidad y ciberseguridad defensiva',
    categories: ['Seguridad', 'IA', 'Datos'],
    year: '2026',
    status: 'Plataforma SOC completa · Pruebas unit/smoke/report/UI',
    collaborationNote:
      'Proyecto colaborativo de ciberseguridad defensiva orientado a evidencia trazable.',
    roleVerified:
      'Motor determinista R01–R06, API FastAPI/SQLAlchemy, consolas Streamlit/React y exportación de reportes.',
    repoUrl: 'https://github.com/Prolexis/caso16-identity-risk-ai',
    coverImage: {
      src: '/assets/projects/caso16-risk.png',
      alt: 'Distribución del índice de riesgo 0 a 100 sobre 113 cuentas de laboratorio en Caso16 Identity Risk AI',
    },
    visuals: [
      {
        src: '/assets/projects/caso16-risk.png',
        alt: 'Distribución del score de riesgo 0 a 100 en 113 cuentas',
        caption: 'Distribución cuantitativa del riesgo (0–100) sobre 113 cuentas de laboratorio.',
      },
      {
        src: '/assets/projects/caso16-architecture.png',
        alt: 'Arquitectura técnica de Caso16 Identity Risk AI',
        caption: 'Separación entre motor determinista R01–R06 y capas de visualización SOC.',
      },
    ],
    problem:
      'Las auditorías de identidad en Active Directory exigen resultados deterministas y trazabilidad sin intervenir controladores en producción.',
    solution:
      'Motor en modo lectura sobre volcados SharpHound/BloodHound con seis reglas deterministas (R01–R06), score 0–100, bitácora append-only y exportación XLSX/DOCX/PDF.',
    architectureSummary: [
      'Normalización SQLAlchemy + PostgreSQL 16 / SQLite con bitácora append-only audit_logs.',
      'API FastAPI (:8000), consola SOC Streamlit (:8501) y frontend React 18 + TypeScript (:5173).',
      'Automatizaciones auxiliares n8n / LangFlow sobre evidencia ya confirmada.',
    ],
    confirmedStack: [
      'Python',
      'FastAPI',
      'Streamlit',
      'React',
      'TypeScript',
      'PostgreSQL',
      'SQLAlchemy',
    ],
    previewTags: ['Python', 'FastAPI', 'PostgreSQL'],
    implementedFeatures: [
      'Seis reglas deterministas R01–R06 alineadas a controles ISO/IEC 27001 A.8.2 y A.8.16.',
      'Exportación técnica en XLSX, DOCX y PDF.',
      'Suites unit, smoke, report y ui.',
    ],
    howToVerify: [
      'Ejecutar las suites incluidas en github.com/Prolexis/caso16-identity-risk-ai.',
    ],
    challengesAndLearnings: [
      'Garantizar que ninguna capa de IA invente hallazgos fuera de la evidencia del grafo.',
    ],
    verifiedResults: [
      'Evaluado en entorno de laboratorio sobre 4 dominios simulados (113 cuentas, 269 hallazgos trazables).',
    ],
    disclaimer:
      'Evaluación en dominios de laboratorio simulados (PHANTOM.CORP, WRAITH.CORP, ESC1.LOCAL, GHOST.CORP) en modo solo lectura.',
  },
  {
    slug: 'egresados-system',
    indexLabel: '06',
    order: 6,
    name: 'Egresados System',
    shortTitle: 'Egresados System — Plataforma de Vinculación Profesional',
    tagline:
      'Monorepo full-stack para vinculación de egresados, analítica laboral y generación asíncrona de CV en PDF.',
    editorialSubtitle: 'Plataforma de vinculación profesional',
    categories: ['Web', 'Datos'],
    year: '2026',
    status: 'Monorepo full-stack · Portal desplegado en Vercel',
    collaborationNote:
      'Proyecto académico organizado en monorepo con integración continua en GitHub Actions.',
    roleVerified:
      'Arquitectura web + API en monorepo, contratos tipados tRPC/Prisma y despliegue en Vercel.',
    repoUrl: 'https://github.com/Prolexis/egresados-system',
    liveDemoUrl: 'https://egresados-system-web.vercel.app',
    liveDemoLabel: 'Abrir aplicación en Vercel',
    coverIllustration: 'egresados-portal',
    architectureKind: 'egresados',
    visuals: [],
    problem:
      'El seguimiento de egresados suele fragmentarse entre planillas aisladas sin contratos tipados ni exportación automatizada de currículums.',
    solution:
      'Monorepo con cliente Next.js 14 desplegado en Vercel y backend NestJS 10 + tRPC + Prisma sobre PostgreSQL 15, delegando PDF con Puppeteer a colas Bull sobre Redis 7.',
    architectureSummary: [
      'apps/web en Next.js 14, React, TypeScript, Tailwind CSS y Zustand.',
      'apps/api en NestJS 10 + tRPC + Prisma ORM sobre PostgreSQL 15 con JWT/Passport.',
      'Workers Bull + Redis 7 + Puppeteer para generación asíncrona de CV en PDF.',
    ],
    confirmedStack: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
      'Docker',
      'Git',
    ],
    previewTags: ['Next.js', 'NestJS', 'PostgreSQL'],
    implementedFeatures: [
      'Contratos tipados de extremo a extremo con TypeScript y tRPC.',
      'Cola en segundo plano para exportación de CV en PDF.',
      'Integración continua configurada en GitHub Actions.',
    ],
    howToVerify: [
      'Visitar https://egresados-system-web.vercel.app (acceso /auth/login) y revisar el monorepo en GitHub.',
    ],
    challengesAndLearnings: [
      'Sacar la generación de PDF con Puppeteer hacia Redis/Bull mantuvo fluida la API principal.',
    ],
    verifiedResults: [
      'Portal web desplegado en Vercel (redirección activa a /auth/login comprobada con HTTP 200).',
    ],
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    slug: 'translation-batch-app',
    name: 'Translation Batch App',
    categories: ['IA', 'Web'],
    summary:
      'Traductor por lotes (.txt, .docx y .pdf) con agentes LangChain LCEL + Google Gemini y exportación ZIP.',
    stack: ['Python', 'Streamlit', 'LangChain'],
    repoUrl: 'https://github.com/Prolexis/translation-batch-app',
    status: 'App Streamlit',
  },
  {
    slug: 'maize-disease-detection',
    name: 'Maize Disease Detection',
    categories: ['IA', 'Datos', 'Web'],
    summary:
      'Diagnóstico fitosanitario en maíz mediante consenso CNN tri-modelo (MobileNetV2, ResNet50, EfficientNetB0) + Next.js y FastAPI.',
    stack: ['Python', 'TensorFlow', 'FastAPI'],
    repoUrl: 'https://github.com/Prolexis/maize-disease-detection',
    status: 'Visión computacional',
  },
  {
    slug: 'ciberseguridad-bancaria',
    name: 'AegisBank™ (Ciberseguridad Bancaria)',
    categories: ['Seguridad', 'IA', 'Web'],
    summary:
      'Plataforma defensiva anti-phishing con FastAPI asíncrono, React + TypeScript, PostgreSQL y automatización n8n.',
    stack: ['Python', 'FastAPI', 'React'],
    repoUrl: 'https://github.com/Prolexis/Ciberseguridad_Bancaria',
    status: 'Seguridad defensiva',
  },
  {
    slug: 'cryzan-sports',
    name: 'Cryzan Sport E-Commerce',
    categories: ['Web', 'Datos'],
    summary:
      'E-commerce contenedorizado con Docker, panel analítico, documentación REST, privacidad ARCO y pruebas en Vitest.',
    stack: ['TypeScript', 'Next.js', 'Docker'],
    repoUrl: 'https://github.com/Prolexis/Cryzan_Sports-',
    status: 'Full-stack',
  },
  {
    slug: 'tienda-online',
    name: 'Tienda Online',
    categories: ['Web'],
    summary:
      'Aplicación web e-commerce en TypeScript con catálogo responsivo y despliegue público activo en Vercel.',
    stack: ['TypeScript', 'Frontend Web'],
    repoUrl: 'https://github.com/Prolexis/tienda-online',
    liveDemoUrl: 'https://tienda-online-cyan-beta.vercel.app',
    status: 'Demo en Vercel',
  },
  {
    slug: 'opencv-streamlit-app',
    name: 'OpenCV Streamlit App',
    categories: ['IA', 'Datos'],
    summary:
      'Aplicación multipágina de visión por computador en Python, OpenCV y Streamlit con clasificadores Haar Cascade.',
    stack: ['Python', 'OpenCV', 'Streamlit'],
    repoUrl: 'https://github.com/Prolexis/OpenCV-Streamlitapp',
    status: 'OpenCV',
  },
  {
    slug: 'procesamiento-datasets-ml',
    name: 'Procesamiento Datasets ML',
    categories: ['Datos', 'IA'],
    summary:
      'Herramienta interactiva en Python y Streamlit para limpieza y preparación de datasets orientados a Machine Learning.',
    stack: ['Python', 'Streamlit'],
    repoUrl: 'https://github.com/Prolexis/Procesamiento_Datasets_ML',
    status: 'Machine Learning',
  },
];

export function getFlagshipProjectBySlug(slug: string): FlagshipProject | undefined {
  return flagshipProjects.find((p) => p.slug === slug);
}

export function getAdjacentFlagshipProjects(slug: string): {
  prev: FlagshipProject | null;
  next: FlagshipProject | null;
} {
  const index = flagshipProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? flagshipProjects[index - 1] : null,
    next: index < flagshipProjects.length - 1 ? flagshipProjects[index + 1] : null,
  };
}
