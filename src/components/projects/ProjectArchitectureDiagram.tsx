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
  compact = false,
  className,
}: {
  kind: ArchitectureDiagramKind;
  compact?: boolean;
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
        'flex h-full flex-col justify-between rounded-lg border border-border-subtle bg-bg p-4 sm:p-6',
        className
      )}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
          <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{data.header}</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
          Arquitectura conceptual
        </span>
      </div>

      <div
        className={cn(
          'grid gap-3',
          compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'
        )}
      >
        {data.nodes.map((node, index) => (
          <div
            key={node.title}
            className="flex flex-col justify-between rounded-md border border-border-subtle bg-bg-elevated p-3.5"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  0{index + 1} · {node.tag}
                </span>
                {index < data.nodes.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-text-muted" aria-hidden="true" />
                )}
              </div>
              <p className="mt-1.5 font-display text-sm font-semibold text-text-primary">
                {node.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                {node.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!compact && (
        <p className="mt-4 border-t border-border-subtle/70 pt-3 font-mono text-[11px] text-text-muted">
          {data.caption}
        </p>
      )}
    </div>
  );
}
