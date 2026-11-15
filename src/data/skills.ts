export interface SkillItem {
  name: string;
  context: string;
  projectSlugs: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend-apis',
    title: 'Backend, APIs y Arquitectura',
    description:
      'Construcción de servicios tipados, reglas de negocio deterministas y validación de esquemas para producción y prototipos.',
    items: [
      {
        name: 'TypeScript & Node.js',
        context: 'Contratos end-to-end, APIs y validación de entrada',
        projectSlugs: ['vasochain-ai', 'establo-ai-leads', 'egresados-system'],
      },
      {
        name: 'NestJS + Prisma',
        context: 'Módulos de negocio, colas asíncronas y ORM sobre PostgreSQL',
        projectSlugs: ['vasochain-ai', 'egresados-system'],
      },
      {
        name: 'Python & FastAPI',
        context: 'Microservicios analíticos, motores de riesgo y análisis geoespacial',
        projectSlugs: ['minesafe-3d', 'yaku-alert-unt', 'identity-risk-ai'],
      },
      {
        name: 'Validación y Reglas (Zod / tRPC)',
        context: 'Esquemas estrictos y separación entre consultas autorizadas e IA',
        projectSlugs: ['establo-ai-leads', 'egresados-system'],
      },
    ],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend, Dashboards y Visualización',
    description:
      'Interfaces responsivas, tableros operativos y escenas interactivas orientadas a claridad técnica.',
    items: [
      {
        name: 'Next.js (App Router) & React',
        context: 'Aplicaciones web SSR/CSR y portales completos',
        projectSlugs: ['establo-ai-leads', 'egresados-system', 'minesafe-3d'],
      },
      {
        name: 'Tailwind CSS',
        context: 'Sistemas visuales consistentes y componentes responsivos',
        projectSlugs: ['vasochain-ai', 'yaku-alert-unt', 'establo-ai-leads', 'egresados-system'],
      },
      {
        name: 'Three.js / WebGL & Leaflet',
        context: 'Gemelos digitales 3D y cartografía espacial de riesgo',
        projectSlugs: ['minesafe-3d', 'yaku-alert-unt'],
      },
      {
        name: 'Recharts & Streamlit',
        context: 'Indicadores ejecutivos y consolas rápidas para analítica y SOC',
        projectSlugs: ['establo-ai-leads', 'identity-risk-ai', 'egresados-system'],
      },
    ],
  },
  {
    id: 'ai-xai',
    title: 'IA Aplicada, LLMs y XAI',
    description:
      'Integración responsable de modelos de lenguaje y machine learning con herramientas acotadas y explicabilidad.',
    items: [
      {
        name: 'Anthropic Claude & Google Gemini',
        context: 'Verificación multimodal, copilotos comerciales y síntesis ejecutiva',
        projectSlugs: ['vasochain-ai', 'minesafe-3d', 'establo-ai-leads'],
      },
      {
        name: 'Random Forest & TreeSHAP (XAI)',
        context: 'Atribución causal global/local en modelos de riesgo simulados',
        projectSlugs: ['minesafe-3d'],
      },
      {
        name: 'LangChain, n8n & LangFlow',
        context: 'Flujos de orquestación documental y automatización con backoff',
        projectSlugs: ['identity-risk-ai'],
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Datos, SQL y Seguridad Aplicada',
    description:
      'Modelado relacional, trazabilidad verificable, auditoría determinista y despliegue reproducible.',
    items: [
      {
        name: 'PostgreSQL & PostGIS / SQLite',
        context: 'Persistencia relacional, geoespacial y bitácoras append-only',
        projectSlugs: ['vasochain-ai', 'minesafe-3d', 'identity-risk-ai', 'egresados-system'],
      },
      {
        name: 'SQL Server (T-SQL, Vistas, SP)',
        context: 'Consultas parametrizadas sin SQL libre para inteligencia comercial',
        projectSlugs: ['establo-ai-leads'],
      },
      {
        name: 'Active Directory / SharpHound & RBAC',
        context: 'Detección determinista de cuentas huérfanas y rutas de privilegio',
        projectSlugs: ['identity-risk-ai'],
      },
      {
        name: 'Solidity (Hardhat) & Docker Compose',
        context: 'Evidencia inmutable en testnet/nodo local y entornos reproducibles',
        projectSlugs: ['vasochain-ai', 'minesafe-3d', 'yaku-alert-unt'],
      },
    ],
  },
];
