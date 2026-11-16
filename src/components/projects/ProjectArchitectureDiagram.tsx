import { ArrowRight, CloudRain, GraduationCap, ShieldCheck } from 'lucide-react';
import type { ArchitectureDiagramKind } from '@/data/projects';
import { cn } from '@/lib/utils';

interface DiagramNode {
  title: string;
  subtitle: string;
  tag: string;
}

const diagramData: Record<
  ArchitectureDiagramKind,
  {
    header: string;
    caption: string;
    nodes: DiagramNode[];
  }
> = {
  vasochain: {
    header: 'VasoChainAI · Flujo de trazabilidad y verificación',
    caption: 'Basado en arquitectura Docker Compose de 4 servicios (:5174, :3001, :5433, :8545).',
    nodes: [
      {
        title: 'WhatsApp + Panel React',
        subtitle: 'Simulador local / Whapi / Twilio e interfaz operativa (:5174)',
        tag: 'Ingesta',
      },
      {
        title: 'NestJS API + Claude Vision',
        subtitle: 'Autenticación, 13 controles automatizados y verificación visual (:3001)',
        tag: 'Validación IA',
      },
      {
        title: 'PostgreSQL + Prisma',
        subtitle: 'Beneficiarios, entregas y auditoría relacional (:5433)',
        tag: 'Persistencia',
      },
      {
        title: 'Hardhat · DeliveryRegistry.sol',
        subtitle: 'Anclaje criptográfico inmutable de hashes de entrega (:8545)',
        tag: 'Blockchain',
      },
    ],
  },
  'yaku-alert': {
    header: 'YAKU ALERT UNT · Motor geoespacial preventivo',
    caption: 'Prototipo para Desafío 3 (Hackathon Innova Norte 3G 2026) bajo marco Ley N.° 29664.',
    nodes: [
      {
        title: 'Open-Meteo + Respaldo Offline',
        subtitle: 'Lectura meteorológica IPv4 con degradación controlada',
        tag: 'Datos',
      },
      {
        title: 'FastAPI + Shapely 2.x',
        subtitle: 'Geometría de corredores hídricos validada con pytest (:8000)',
        tag: 'Análisis',
      },
      {
        title: 'React + Leaflet (3 vistas)',
        subtitle: 'Monitoreo, Mapa/Escenarios y Respuesta UNT (:8080)',
        tag: 'Cartografía',
      },
      {
        title: 'Criterio SINAGERD',
        subtitle: 'Separación estricta entre pronóstico y simulación sin captura PII',
        tag: 'Gobernanza',
      },
    ],
  },
  egresados: {
    header: 'Egresados System · Monorepo y workers asíncronos',
    caption: 'Separación modular apps/web (Vercel) + apps/api (NestJS/tRPC/Prisma/Redis).',
    nodes: [
      {
        title: 'Next.js 14 + Zustand',
        subtitle: 'Portal web desplegado en Vercel con analítica Recharts (apps/web)',
        tag: 'Cliente Web',
      },
      {
        title: 'NestJS 10 + tRPC + JWT',
        subtitle: 'Contratos tipados de extremo a extremo y autorización Passport',
        tag: 'API Tipada',
      },
      {
        title: 'PostgreSQL 15 + Prisma',
        subtitle: 'Modelo relacional de egresados y empleabilidad',
        tag: 'Datos',
      },
      {
        title: 'Redis 7 + Bull + Puppeteer',
        subtitle: 'Generación asíncrona de currículums en PDF en segundo plano',
        tag: 'Workers',
      },
    ],
  },
};

export function ProjectArchitectureDiagram({
  kind,
  className,
}: {
  kind: ArchitectureDiagramKind;
  className?: string;
}) {
  const data = diagramData[kind];

  const Icon =
    kind === 'vasochain'
      ? ShieldCheck
      : kind === 'yaku-alert'
        ? CloudRain
        : GraduationCap;

  return (
    <div
      className={cn(
        'flex flex-col justify-between rounded-xl bg-white p-5 text-ink shadow-editorialLight sm:p-7',
        className
      )}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-ruleLight pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-ink">
          <Icon className="h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
          <span>{data.header}</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mutedLight">
          Arquitectura técnica
        </span>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {data.nodes.map((node, index) => (
          <div
            key={node.title}
            className="flex flex-col justify-between rounded-lg bg-ivory p-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cobalt">
                  0{index + 1} · {node.tag}
                </span>
                {index < data.nodes.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-mutedLight" aria-hidden="true" />
                )}
              </div>
              <p className="mt-2 font-display text-sm font-semibold text-ink">
                {node.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-mutedLight">
                {node.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 border-t border-ruleLight pt-3 font-mono text-[11px] text-mutedLight">
        {data.caption}
      </p>
    </div>
  );
}
