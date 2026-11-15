export type ProjectCategory = 'IA' | 'Web' | 'Seguridad' | 'Datos' | 'Hackathons';

export type ArchitectureDiagramKind = 'vasochain' | 'yaku-alert' | 'egresados';

export interface ProjectVisual {
  src: string;
  alt: string;
  caption: string;
}

export interface FlagshipProject {
  slug: string;
  order: number;
  name: string;
  shortTitle: string;
  tagline: string;
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
  architectureKind?: ArchitectureDiagramKind;
  visuals: ProjectVisual[];
  problem: string;
  solution: string;
  architectureSummary: string[];
  confirmedStack: string[];
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
    order: 1,
    name: 'VasoChain AI',
    shortTitle: 'VasoChain AI — Trazabilidad Social & IA',
    tagline:
      'Plataforma de supervisión transparente y trazabilidad para programas sociales con verificación multimodal, WhatsApp y registro en blockchain.',
    categories: ['IA', 'Web', 'Hackathons', 'Seguridad'],
    year: '2026',
    status: 'Prototipo funcional premiado · Docker Compose (4 servicios)',
    collaborationNote:
      'Participación en la Hackathon de Inteligencia Artificial organizada por Syscoin (junio–julio de 2026). Proyecto galardonado con el 3.er lugar nacional.',
    roleVerified:
      'Desarrollo de arquitectura full-stack, integración entre frontend, API NestJS, contratos en Hardhat y validación mediante agente multimodal.',
    recognitionBadge: '3.er lugar nacional · Reconocimiento UNT (2026)',
    relatedAchievementId: 'syscoin-unt-2026',
    repoUrl: 'https://github.com/Prolexis/vasochainAI',
    architectureKind: 'vasochain',
    visuals: [],
    problem:
      'Los programas municipales de asistencia alimentaria enfrentan brechas de auditoría entre la entrega física de insumos y el registro administrativo, dificultando comprobar con evidencia confiable que cada ración llegó al beneficiario correcto.',
    solution:
      'Sistema integral que combina un flujo conversacional de reporte por WhatsApp, análisis de comprobantes mediante visión multimodal (Claude Vision), persistencia relacional en PostgreSQL y anclaje criptográfico de hashes de entrega en el contrato inteligente DeliveryRegistry.sol.',
    architectureSummary: [
      'Frontend operativo en React + Vite + Tailwind CSS (puerto 5174) para gestión de beneficiarios, entregas y auditoría.',
      'Backend modular en NestJS + Prisma ORM (puerto 3001) con módulos de autenticación, beneficiarios, entregas, controles, blockchain, IA y WhatsApp.',
      'Persistencia en PostgreSQL (puerto 5433) separada de la red blockchain local en Hardhat (puerto 8545) que ejecuta DeliveryRegistry.sol.',
      'Arnés de verificación de 13 controles automatizados y simulador de WhatsApp para probar flujos sin costos externos de mensajería.',
    ],
    confirmedStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'NestJS',
      'Prisma ORM',
      'PostgreSQL',
      'Solidity / Hardhat',
      'Anthropic Claude Vision',
      'Docker Compose',
    ],
    implementedFeatures: [
      'Registro y control trazable de entregas con hash inmutable on-chain (DeliveryRegistry.sol).',
      'Verificación visual automática de evidencia fotográfica apoyada en Claude Vision.',
      'Canal conversacional compatible con simulador local de WhatsApp, Whapi, Twilio, Telegram y Discord.',
      'Arnés de 13 controles en backend para validar reglas operativas y consistencia antes del anclaje.',
    ],
    howToVerify: [
      'Clonar github.com/Prolexis/vasochainAI y revisar los módulos en backend/src (auth, beneficiarios, entregas, controles, blockchain, ia, whatsapp, harness).',
      'Levantar la pila completa de 4 contenedores con Docker Compose (frontend :5174, API :3001, PostgreSQL :5433, Hardhat :8545).',
      'Consultar el contrato inteligente DeliveryRegistry.sol y ejecutar los controles del módulo harness en entorno local.',
    ],
    challengesAndLearnings: [
      'Desacoplar la validación operativa off-chain en NestJS del anclaje on-chain para mantener costos controlados y auditoría clara.',
      'Diseñar un simulador local de WhatsApp y 13 controles de prueba para demostrar flujos complejos en vivo durante una hackathon sin depender de terceros.',
    ],
    verifiedResults: [
      '3.er lugar a nivel nacional en la Hackathon de Inteligencia Artificial organizada por Syscoin (junio–julio de 2026).',
      'Reconocimiento oficial otorgado el 22 de julio de 2026 por la Escuela de Ingeniería de Sistemas y la Facultad de Ingeniería de la UNT.',
      'Arquitectura completa reproducible con 4 servicios contenedorizados y licencia MIT.',
    ],
  },
  {
    slug: 'minesafe-3d',
    order: 2,
    name: 'MineSafe 3D',
    shortTitle: 'MineSafe 3D — Gemelo Digital & XAI',
    tagline:
      'Gemelo digital 3D explicable para simulación y predicción de riesgo de colisión en flotas mineras mixtas.',
    categories: ['IA', 'Datos', 'Web'],
    year: '2026',
    status: 'Prototipo experimental + pipeline CRISP-DM reproducible',
    collaborationNote:
      'Proyecto de ingeniería e investigación experimental con artefactos reproducibles y dataset sintético publicado en Zenodo.',
    roleVerified:
      'Diseño de escena 3D en Three.js, microservicio de inferencia/XAI en FastAPI, pipeline experimental y documentación de límites éticos y técnicos.',
    repoUrl: 'https://github.com/Prolexis/gemelo-digital-prototipo',
    visuals: [
      {
        src: '/assets/projects/minesafe-architecture.png',
        alt: 'Diagrama de arquitectura de 4 capas de MineSafe 3D: visualización Three.js, laboratorio CRISP-DM en Streamlit, motor físico cinemático, Random Forest con TreeSHAP y capa de ingesta',
        caption:
          'Arquitectura experimental de cuatro capas integrando escena Three.js, motor cinemático y explicabilidad TreeSHAP.',
      },
      {
        src: '/assets/projects/minesafe-shap.png',
        alt: 'Gráfico TreeSHAP global de MineSafe 3D mostrando el impacto medio de distancia a obstáculo LiDAR y velocidad GNSS en las predicciones simuladas',
        caption:
          'Atribución causal global TreeSHAP sobre el conjunto experimental: distancia LiDAR (0.337) y velocidad GNSS (0.120) explican la mayor parte del score.',
      },
    ],
    problem:
      'En operaciones a tajo abierto con flotas mixtas (camiones manuales y autónomos), los modelos opacos de alerta no explican qué variable geométrica o de fatiga dispara una advertencia de proximidad.',
    solution:
      'Gemelo digital interactivo en React 19 + Three.js WebGL conectado a un backend FastAPI (Python 3.11) con pipeline de Machine Learning interpretable mediante TreeSHAP, copiloto auxiliar Gemini 2.5 Flash y exportación de reportes técnicos en PDF.',
    architectureSummary: [
      'Capa de presentación en React 19, TypeScript, Three.js WebGL y Tailwind CSS servida detrás de Nginx.',
      'Microservicio FastAPI (/api/gemini/health, /analyze-risk, /chat) integrando Google GenAI (gemini-2.5-flash) con control de acceso por rol (RBAC).',
      'Motor analítico y laboratorio experimental (/experiments/run_all.py) con cálculo TreeSHAP global y local para explicar cada predicción.',
      'Dataset sintético abierto DSTM-MineSafe-2026.csv (n = 5,000, DOI 10.5281/zenodo.22905230) bajo licencias MIT + CC BY 4.0.',
    ],
    confirmedStack: [
      'React 19',
      'TypeScript',
      'Three.js / WebGL',
      'Python 3.11',
      'FastAPI',
      'Random Forest / TreeSHAP',
      'Google Gemini 2.5 Flash',
      'Nginx / Docker',
    ],
    implementedFeatures: [
      'Escena 3D interactiva con vehículos, trayectorias y semáforo visual de riesgo.',
      'Explicabilidad causal global y local mediante TreeSHAP para auditar el peso de cada variable.',
      'Asistente operativo y generación de reportes PDF estructurados con control RBAC.',
      'Scripts reproducibles de benchmarking y comparación de latencia/curvas ROC-PR.',
    ],
    howToVerify: [
      'Revisar el README y los scripts bajo /experiments/run_all.py en github.com/Prolexis/gemelo-digital-prototipo.',
      'Ejecutar el pipeline experimental sobre DSTM-MineSafe-2026.csv para regenerar figuras SHAP y tablas comparativas.',
      'Verificar los endpoints FastAPI y las notas de licencia dual (MIT + CC BY 4.0).',
    ],
    challengesAndLearnings: [
      'Mantener fluidez visual en Three.js separando el renderizado del cálculo explicable TreeSHAP.',
      'Comunicar con rigor científico los alcances de un benchmark sintético sin extrapolarlo a seguridad minera certificada en campo.',
    ],
    verifiedResults: [
      'Pipeline experimental completamente reproducible con 5 figuras técnicas generadas desde código.',
      'En simulación controlada se midió un AUC-ROC de 0.942 con FPR de 4.8% (y variantes experimentales RF documentadas en laboratorio), junto con reducción simulada de tiempo de evaluación de 6.4 s a 1.8 s.',
    ],
    disclaimer:
      'Aviso técnico: todas las métricas reportadas provienen exclusivamente de simulación experimental sobre el dataset sintético DSTM-MineSafe-2026 (n = 5,000). No constituyen validación en faena minera real ni certificación ISO 21815 o MSHA.',
  },
  {
    slug: 'yaku-alert-unt',
    order: 3,
    name: 'YAKU ALERT — UNT',
    shortTitle: 'YAKU ALERT — Riesgo Hidrometeorológico',
    tagline:
      'Prototipo geoespacial para monitoreo preventivo, corredores hídricos y respuesta ante lluvias extremas en Trujillo y campus UNT.',
    categories: ['Web', 'Datos', 'Hackathons'],
    year: '2026',
    status: 'Prototipo de hackathon · FastAPI + Leaflet + pytest',
    collaborationNote:
      'Desarrollado en el marco de la Hackathon Innova Norte 3G 2026 (Desafío 3). Trabajo colaborativo orientado a prevención universitaria y territorial.',
    roleVerified:
      'Implementación de vistas espaciales en React + Leaflet, integración del motor geométrico en FastAPI/Shapely y separación clara entre pronóstico y simulación.',
    repoUrl: 'https://github.com/Prolexis/yaku-alert-unt',
    architectureKind: 'yaku-alert',
    visuals: [],
    problem:
      'Ante eventos de lluvia intensa o activación de quebradas en Trujillo, la comunidad universitaria necesita comprender corredores hídricos locales y rutas preventivas sin confundir escenarios simulados con alertas meteorológicas oficiales.',
    solution:
      'Aplicación web modular con tres vistas operativas (Monitoreo, Mapa y Escenarios, Prevención y Respuesta), respaldada por un motor en FastAPI + Shapely 2.x que combina consulta a Open-Meteo (IPv4) con modo offline de respaldo.',
    architectureSummary: [
      'Frontend en React + Vite + Tailwind CSS + Leaflet (puerto 8080) organizado en tres vistas orientadas a toma de decisión preventiva.',
      'Backend FastAPI + Shapely 2.x (puerto 8000) para intersecciones espaciales, análisis territorial de escenarios y validación con pruebas en pytest.',
      'Cliente meteorológico sobre Open-Meteo con tolerancia a fallos mediante datos de respaldo offline para demostraciones sin conectividad.',
      'Diseño alineado al enfoque de gestión prospectiva y reactiva de la Ley N.° 29664 (SINAGERD) sin captura de GPS ni datos personales.',
    ],
    confirmedStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Leaflet',
      'Python',
      'FastAPI',
      'Shapely 2.x',
      'Open-Meteo',
      'pytest',
      'Docker Compose',
    ],
    implementedFeatures: [
      'Tres vistas integradas: panel de monitoreo, cartografía interactiva de escenarios y protocolos preventivos.',
      'Etiquetado explícito que distingue pronóstico meteorológico externo de escenarios sintéticos de lluvia.',
      'Cero recolección de PII ni ubicación GPS del usuario final.',
      'Suite de pruebas automatizadas en backend con pytest y despliegue con Docker Compose.',
    ],
    howToVerify: [
      'Inspeccionar el repositorio github.com/Prolexis/yaku-alert-unt y su suite de pruebas en pytest.',
      'Levantar frontend (:8080) y backend (:8000) mediante Docker Compose para explorar las 3 vistas en Leaflet.',
    ],
    challengesAndLearnings: [
      'Evitar errores de interpretación de riesgo separando visual y semánticamente los escenarios hipotéticos de datos meteorológicos reales.',
      'Garantizar resiliencia en exposiciones de hackathon mediante respaldo offline automático ante cortes de red.',
    ],
    verifiedResults: [
      'Prototipo funcional presentado para el Desafío 3 de la Hackathon Innova Norte 3G 2026.',
      'Backend espacial verificado con pruebas automatizadas en pytest y ejecución estable vía Docker Compose.',
    ],
    disclaimer:
      'Aviso legal (Ley N.° 29664 — SINAGERD): prototipo informativo y académico. No reemplaza los avisos oficiales de SENAMHI, COEN, INDECI ni de Defensa Civil de la UNT.',
  },
  {
    slug: 'identity-risk-ai',
    order: 4,
    name: 'Identity Risk AI (OrphanHunter)',
    shortTitle: 'Identity Risk AI — Auditoría Active Directory',
    tagline:
      'Motor determinista de auditoría y priorización de riesgo de identidad en Active Directory sobre telemetría SharpHound/BloodHound.',
    categories: ['Seguridad', 'IA', 'Datos'],
    year: '2026',
    status: 'Plataforma SOC completa · Tests unit/smoke/report/UI',
    collaborationNote:
      'Proyecto colaborativo de ciberseguridad defensiva con auditoría determinista, persistencia trazable y flujos de orquestación.',
    roleVerified:
      'Construcción del motor de reglas deterministas R01–R06, capa SQLAlchemy/API FastAPI, exportación ejecutiva y paneles operativos.',
    repoUrl: 'https://github.com/Prolexis/caso16-identity-risk-ai',
    visuals: [
      {
        src: '/assets/projects/caso16-architecture.png',
        alt: 'Diagrama de arquitectura de OrphanHunter (Identity Risk AI): ingesta SharpHound/BloodHound, normalización SQLAlchemy, motor de reglas R01-R06, persistencia SQLite/PostgreSQL, consola Streamlit y React',
        caption:
          'Separación estricta entre el motor determinista de evidencia (R01–R06) y las capas de visualización SOC y API.',
      },
      {
        src: '/assets/projects/caso16-risk.png',
        alt: 'Gráfico de distribución del score de riesgo 0 a 100 sobre 113 cuentas de laboratorio en Identity Risk AI',
        caption:
          'Distribución del índice de riesgo (0–100) en el conjunto de prueba controlado de 113 cuentas y 4 dominios simulados.',
      },
    ],
    problem:
      'Los equipos de seguridad necesitan detectar cuentas huérfanas, privilegios heredados o exposiciones Kerberoasting/AS-REP en Active Directory sin depender de cajas negras opacas ni alterar el directorio en producción.',
    solution:
      'Plataforma defensiva de solo lectura que ingiere volcados SharpHound/BloodHound, normaliza relaciones en SQLAlchemy y aplica un motor determinista de 6 reglas (R01–R06) con puntuación 0–100, bitácora append-only y exportación de reportes.',
    architectureSummary: [
      'Capa de ingesta read-only sobre archivos JSON/CSV de SharpHound/BloodHound sin tocar controladores de dominio vivos.',
      'Motor determinista R01–R06 con cálculo explicable de puntaje 0–100 y clasificación entre hallazgos confirmados y potenciales.',
      'API FastAPI /api/v1 (puerto 8000), consola SOC en Streamlit (puerto 8501) y frontend React 18 + TypeScript + Vite (puerto 5173).',
      'Persistencia en PostgreSQL 16 o SQLite con tabla audit_logs en modo append-only y automatizaciones n8n / LangFlow.',
    ],
    confirmedStack: [
      'Python',
      'FastAPI',
      'Streamlit',
      'React 18 + TypeScript',
      'SQLAlchemy',
      'PostgreSQL 16 / SQLite',
      'SharpHound / BloodHound',
      'n8n / LangFlow',
    ],
    implementedFeatures: [
      'Seis reglas deterministas auditables (R01–R06) alineadas con controles ISO/IEC 27001 A.8.2 y A.8.16.',
      'Exportación estructurada a XLSX, DOCX y PDF para equipos técnicos y comités de seguridad.',
      'Registro histórico inmutable (audit_logs append-only) para preservar trazabilidad de evaluaciones.',
      'Batería de pruebas unitarias, smoke, generación de reportes e interfaz.',
    ],
    howToVerify: [
      'Consultar el código y la guía de pruebas en github.com/Prolexis/caso16-identity-risk-ai.',
      'Ejecutar las suites de prueba unit/smoke/report/ui incluidas con el conjunto de laboratorio de 4 dominios.',
    ],
    challengesAndLearnings: [
      'Garantizar que la IA y las interfaces solo interpreten o prioricen evidencia ya validada por el motor determinista, evitando falsos hallazgos inventados.',
      'Estructurar reportes técnicos reproducibles a partir de grafos de identidad complejos.',
    ],
    verifiedResults: [
      'Sobre el dataset controlado de 4 dominios simulados (113 cuentas totales) generó 269 hallazgos trazables (44 críticos, 107 altos, 118 medios; 117 confirmados y 152 potenciales).',
      'Cobertura completa de ingesta en modo lectura, puntuación 0–100 y exportación multipantalla probada en entorno de laboratorio.',
    ],
    disclaimer:
      'Entorno evaluado sobre dominios de laboratorio simulados (PHANTOM.CORP, WRAITH.CORP, ESC1.LOCAL y GHOST.CORP). Diseñado exclusivamente para auditoría defensiva en modo lectura sobre volcados autorizados.',
  },
  {
    slug: 'establo-ai-leads',
    order: 5,
    name: 'Establo AI Leads',
    shortTitle: 'Establo AI Leads — BI & Copiloto SQL',
    tagline:
      'Sistema de analítica transaccional y copiloto comercial acotado para conversión LEAD → PAYER sobre SQL Server V3.',
    categories: ['Datos', 'IA', 'Web'],
    year: '2026',
    status: 'Proyecto académico BI · Next.js 15 + SQL Server V3',
    collaborationNote:
      'Proyecto académico de Inteligencia de Negocios enfocado en modelado relacional, KPIs auditables y agente comercial seguro para Parrilladas El Establo (Trujillo).',
    roleVerified:
      'Desarrollo de dashboard en Next.js 15 + Recharts, capa de consultas parametrizadas a SQL Server mediante mssql y diseño de 12 herramientas seguras para el copiloto Gemini/heurístico.',
    relatedAchievementId: 'sql-server-2025',
    repoUrl: 'https://github.com/Prolexis/establo-ai-leads',
    visuals: [
      {
        src: '/assets/projects/establo-dashboard.png',
        alt: 'Reporte ejecutivo de la fase LEADS de Parrilladas El Establo con métricas TCP, TAN y TPN marcadas como datos simulados',
        caption:
          'Dashboard de conversión LEAD → PAYER con desglose por medio de pago, motivos de abandono e indicación explícita de datos simulados.',
      },
      {
        src: '/assets/projects/establo-arquitectura.png',
        alt: 'Diagrama de arquitectura de ESTABLO AI conectando canales de mensajería, backend Next.js 15 con Zod, orquestación Hermes/MCP/Gemini y SQL Server V3 mediante procedimientos y consultas parametrizadas',
        caption:
          'Arquitectura segura: el copiloto opera exclusivamente mediante 12 herramientas autorizadas sobre vistas y SP en SQL Server V3 (sin SQL libre).',
      },
    ],
    problem:
      'En atención comercial por mensajería, conectar un modelo generativo directamente a la base de datos representa riesgos de inyección o cifras inventadas, además de perder foco en la etapa clave de conversión antes del pago.',
    solution:
      'Aplicación Next.js 15 App Router conectada a la base SQL Server 2019+ V3 (buyer, 34 tablas y 9 vistas como dbo.vw_kpi_mensual), acompañada de un copiloto con fallback heurístico restringido a 12 herramientas seguras y consultas parametrizadas.',
    architectureSummary: [
      'Frontend y rutas API en Next.js 15 + React 19 + TypeScript 5.7 + Tailwind CSS + Recharts distribuidos en 9 módulos operativos.',
      'Pool parametrizado mssql sobre SQL Server 2019+ V3 (34 tablas y 9 vistas) evitando en todo momento SQL libre generado por el modelo.',
      'Orquestación con Google Gemini / modo heurístico acotada a 12 herramientas autorizadas, validación Zod y zona horaria America/Lima para promociones.',
      'Semáforo automático de abandono a las 72 horas y ficha Perfil 360° estrictamente delimitada al ciclo LEAD → PAYER.',
    ],
    confirmedStack: [
      'Next.js 15',
      'TypeScript 5.7',
      'Tailwind CSS',
      'Recharts',
      'SQL Server 2019+ (T-SQL)',
      'mssql (pool parametrizado)',
      'Zod',
      'Google Gemini / MCP',
    ],
    implementedFeatures: [
      'Control de KPIs comerciales (TCP, TEN y TPN) calculados desde vistas SQL Server auditables.',
      '12 herramientas seguras de solo lectura/acción acotada para el copiloto comercial sin exposición directa de esquema.',
      'Semáforo de seguimiento de leads inactivos (24h / 48h / 72h) y validador de vigencia en America/Lima.',
      'Interfaz operativa de WhatsApp conectable a canales oficiales sin romper reglas de negocio.',
    ],
    howToVerify: [
      'Explorar la estructura de vistas, rutas API y herramientas autorizadas en github.com/Prolexis/establo-ai-leads.',
      'Revisar el esquema SQL Server V3 (buyer) y los cálculos de KPIs mensuales en las vistas documentadas.',
    ],
    challengesAndLearnings: [
      'Diseñar fronteras estrictas entre lenguaje natural y SQL para garantizar que toda métrica mostrada al operador venga de vistas verificadas.',
      'Delimitar el dominio funcional exclusivamente a LEAD → PAYER evitó complejidad innecesaria y mejoró la trazabilidad de conversión.',
    ],
    verifiedResults: [
      'Ejecución académica validada sobre la base SQL Server V3 (17 personas y 19 ciclos simulados, con métricas registradas de TCP, TEN y TPN).',
      'Nueve módulos funcionales integrados incluyendo ficha Perfil 360°, semáforo de abandono y copiloto seguro.',
    ],
    disclaimer:
      'Datos académicos y de simulación: las métricas mostradas (TCP, TEN, TAN y TPN) corresponden a pruebas sobre el esquema académico buyer V3 y no reflejan facturación comercial real en producción.',
  },
  {
    slug: 'egresados-system',
    order: 6,
    name: 'EgresadosNet (egresados-system)',
    shortTitle: 'EgresadosNet — Portal Full-Stack de Egresados',
    tagline:
      'Monorepo empresarial para gestión de egresados, empleabilidad, analítica y generación asíncrona de CV en PDF.',
    categories: ['Web', 'Datos'],
    year: '2026',
    status: 'Monorepo full-stack · Web desplegada en Vercel',
    collaborationNote:
      'Proyecto académico de ingeniería de software full-stack construido en monorepo con integración continua en GitHub Actions.',
    roleVerified:
      'Arquitectura monorepo web + API, estado global con Zustand, contratos tipados tRPC/Prisma y despliegue del cliente web en Vercel.',
    repoUrl: 'https://github.com/Prolexis/egresados-system',
    liveDemoUrl: 'https://egresados-system-web.vercel.app',
    liveDemoLabel: 'Abrir portal web en Vercel (acceso /auth/login)',
    architectureKind: 'egresados',
    visuals: [],
    problem:
      'Las plataformas universitarias de seguimiento a egresados suelen quedar aisladas en hojas de cálculo o portales sin contratos tipados entre frontend, autenticación, analítica de empleabilidad y generación de documentos.',
    solution:
      'Monorepo desacoplado con aplicación web en Next.js 14 (App Router) y backend NestJS 10 + tRPC + Prisma sobre PostgreSQL 15, apoyado por colas Bull/Redis 7 para renderizado de PDFs mediante Puppeteer.',
    architectureSummary: [
      'apps/web en Next.js 14 + React 18 + TypeScript + Tailwind CSS + Zustand + Recharts desplegada en Vercel.',
      'apps/api en NestJS 10 + tRPC + Prisma ORM sobre PostgreSQL 15 con autenticación JWT / Passport.',
      'Procesamiento asíncrono con colas Bull sobre Redis 7 para generar currículums en PDF mediante Puppeteer sin bloquear peticiones HTTP.',
      'Orquestación local con Docker Compose y flujo de verificación automatizada en GitHub Actions CI.',
    ],
    confirmedStack: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Zustand / Recharts',
      'NestJS 10',
      'tRPC',
      'Prisma + PostgreSQL 15',
      'Bull + Redis 7 + Puppeteer',
    ],
    implementedFeatures: [
      'Contratos tipados de extremo a extremo entre apps/web y apps/api mediante TypeScript y tRPC.',
      'Portal de acceso autenticado, tableros de seguimiento con Recharts y gestión de perfiles.',
      'Cola en segundo plano con Bull + Redis para exportación asíncrona de CV en PDF.',
      'Pipeline de integración continua configurado en GitHub Actions y contenedores Docker Compose.',
    ],
    howToVerify: [
      'Visitar https://egresados-system-web.vercel.app (redirige automáticamente al acceso autenticado en /auth/login).',
      'Revisar el monorepo completo (apps/web y apps/api) en github.com/Prolexis/egresados-system.',
    ],
    challengesAndLearnings: [
      'Sacar la generación pesada de PDF con Puppeteer hacia colas Bull/Redis evitó bloqueos en los endpoints principales de la API.',
      'Sincronizar el cliente web desplegado en Vercel con entornos backend locales/Docker mantuvo ordenados los contratos tRPC.',
    ],
    verifiedResults: [
      'Aplicación web desplegada y accesible públicamente en Vercel (redirección activa hacia /auth/login comprobada con HTTP 200).',
      'Monorepo completo con PostgreSQL, Redis, colas de PDF y CI reproducible.',
    ],
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    slug: 'translation-batch-app',
    name: 'Translation Batch App',
    categories: ['IA', 'Web'],
    summary:
      'Traductor por lotes (.txt, .docx y .pdf) basado en flujo de 4 agentes con LangChain LCEL, Google Gemini, control de cuota con backoff exponencial, revisión en vivo y exportación en ZIP.',
    stack: ['Python', 'Streamlit', 'LangChain LCEL', 'Google Gemini', 'Docker'],
    repoUrl: 'https://github.com/Prolexis/translation-batch-app',
    status: 'App Streamlit documentada',
  },
  {
    slug: 'maize-disease-detection',
    name: 'Maize Disease Detection',
    categories: ['IA', 'Datos', 'Web'],
    summary:
      'Diagnóstico fitosanitario en hojas de maíz con consenso tri-modelo CNN (MobileNetV2, ResNet50, EfficientNetB0) + AutoML, interfaz Next.js 16 (ES/EN/PT), backend FastAPI con WebSockets y tablero Streamlit.',
    stack: ['TensorFlow', 'XGBoost', 'FastAPI', 'Next.js 16', 'Streamlit'],
    repoUrl: 'https://github.com/Prolexis/maize-disease-detection',
    status: 'Sistema multimodal full-stack',
  },
  {
    slug: 'ciberseguridad-bancaria',
    name: 'AegisBank™ (Ciberseguridad Bancaria)',
    categories: ['Seguridad', 'IA', 'Web'],
    summary:
      'Plataforma defensiva anti-phishing con análisis vía FastAPI asíncrono, frontend React + TypeScript, PostgreSQL 15, Redis 7, automatización n8n y orquestación LangFlow / Ollama.',
    stack: ['FastAPI', 'React + TS', 'PostgreSQL', 'Redis', 'n8n / LangFlow'],
    repoUrl: 'https://github.com/Prolexis/Ciberseguridad_Bancaria',
    status: 'Plataforma modular defensiva',
  },
  {
    slug: 'cryzan-sports',
    name: 'Cryzan Sport E-Commerce',
    categories: ['Web', 'Datos'],
    summary:
      'Plataforma e-commerce full-stack contenedorizada con Docker, panel analítico de administrador, documentación REST API, portal de privacidad ARCO y suite de pruebas en Vitest.',
    stack: ['TypeScript', 'Next.js', 'REST API', 'Vitest', 'Docker'],
    repoUrl: 'https://github.com/Prolexis/Cryzan_Sports-',
    status: 'Proyecto full-stack con Vitest',
  },
  {
    slug: 'tienda-online',
    name: 'Tienda Online (Vercel Live)',
    categories: ['Web'],
    summary:
      'Aplicación web de comercio electrónico escrita en TypeScript y desplegada públicamente en Vercel con catálogo responsivo y experiencia de compra directa.',
    stack: ['TypeScript', 'Web Frontend', 'Vercel'],
    repoUrl: 'https://github.com/Prolexis/tienda-online',
    liveDemoUrl: 'https://tienda-online-cyan-beta.vercel.app',
    status: 'Demo pública activa en Vercel',
  },
  {
    slug: 'opencv-streamlit-app',
    name: 'OpenCV Streamlit App',
    categories: ['IA', 'Datos'],
    summary:
      'Aplicación multipágina en Python, OpenCV y Streamlit orientada a detección y procesamiento de imágenes con clasificadores Haar Cascade.',
    stack: ['Python', 'OpenCV', 'Streamlit', 'Haar Cascade'],
    repoUrl: 'https://github.com/Prolexis/OpenCV-Streamlitapp',
    status: 'App de visión por computador',
  },
  {
    slug: 'procesamiento-datasets-ml',
    name: 'Procesamiento Datasets ML',
    categories: ['Datos', 'IA'],
    summary:
      'Herramienta interactiva construida en Python y Streamlit para limpieza, preprocesamiento y exploración reproducible de conjuntos de datos para Machine Learning.',
    stack: ['Python', 'Streamlit', 'Preprocesamiento ML'],
    repoUrl: 'https://github.com/Prolexis/Procesamiento_Datasets_ML',
    status: 'Utilidad analítica ML',
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
