export type TechCategoryIconKey = 'code' | 'server' | 'brain' | 'database';

export interface TechGroup {
  id: string;
  title: string;
  iconKey: TechCategoryIconKey;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    id: 'desarrollo',
    title: 'Desarrollo',
    iconKey: 'code',
    items: ['Python', 'TypeScript', 'JavaScript', 'React', 'Next.js'],
  },
  {
    id: 'backend',
    title: 'Backend',
    iconKey: 'server',
    items: ['FastAPI', 'NestJS', 'Prisma / tRPC', 'APIs REST', 'Streamlit'],
  },
  {
    id: 'ia',
    title: 'Inteligencia artificial',
    iconKey: 'brain',
    items: ['Machine Learning', 'OpenCV', 'TensorFlow', 'TreeSHAP (XAI)', 'Claude & Gemini'],
  },
  {
    id: 'infraestructura',
    title: 'Datos e infraestructura',
    iconKey: 'database',
    items: ['SQL Server', 'PostgreSQL', 'Docker', 'Git'],
  },
];
