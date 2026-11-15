import { ArrowRight, Boxes, CloudRain, Database, GraduationCap, ShieldCheck } from 'lucide-react';
import type { ArchitectureDiagramKind } from '@/data/projects';

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
    header: 'VasoChain AI — Flujo conceptual de trazabilidad',
    caption: 'Diagrama conceptual basado en arquitectura Docker Compose de 4 servicios (:5174, :3001, :5433, :8545).',
    nodes: [
      {
        title: 'Canal WhatsApp + React UI',
        subtitle: 'Simulador / Whapi / Twilio y panel operativo en puerto :5174',
        tag: 'Entrada & Operación',
      },
      {
        title: 'NestJS API + Claude Vision',
        subtitle: 'Autenticación, validación con arnés (13 controles) y análisis de evidencia (:3001)',
        tag: 'Orquestación',
      },
      {
        title: 'PostgreSQL + Prisma',
        subtitle: 'Registro estructurado de beneficiarios, entregas y auditoría (:5433)',
        tag: 'Persistencia',
      },
      {
        title: 'Hardhat · DeliveryRegistry.sol',
        subtitle: 'Anclaje criptográfico inmutable de hashes de entrega (:8545)',
        tag: 'Evidencia on-chain',
      },
    ],
  },
  'yaku-alert': {
    header: 'YAKU ALERT UNT — Arquitectura geoespacial preventiva',
    caption: 'Diagrama conceptual basado en el prototipo de Hackathon Innova Norte 3G 2026 (Desafío 3).',
    nodes: [
      {
        title: 'Open-Meteo + Respaldo Offline',
        subtitle: 'Ingesta meteorológica IPv4 con degradación controlada ante cortes de red',
        tag: 'Datos externos',
      },
      {
        title: 'FastAPI + Shapely 2.x',
        subtitle: 'Análisis geométrico de corredores hídricos e intersección territorial (:8000)',
        tag: 'Motor espacial',
      },
      {
        title: 'React + Leaflet (3 vistas)',
        subtitle: 'Monitoreo, Mapa/Escenarios diferenciados y Respuesta UNT (:8080)',
        tag: 'Interfaz',
      },
      {
        title: 'Marco Ley N.° 29664',
        subtitle: 'Prototipo informativo; sin recolección PII y separado de alertas oficiales',
        tag: 'Gobernanza',
      },
    ],
  },
  egresados: {
    header: 'EgresadosNet — Monorepo full-stack y generación asíncrona',
    caption: 'Diagrama conceptual de separación web, API tipada tRPC/Prisma y procesamiento en colas.',
    nodes: [
      {
        title: 'Next.js 14 + Zustand',
        subtitle: 'Cliente web desplegado en Vercel con tableros Recharts (apps/web)',
        tag: 'Frontend Vercel',
      },
      {
        title: 'NestJS 10 + tRPC + JWT',
        subtitle: 'Contratos end-to-end tipados y autorización Passport (apps/api)',
        tag: 'API Tipada',
      },
      {
        title: 'PostgreSQL 15 + Prisma',
        subtitle: 'Esquema relacional de egresados, empleabilidad y convocatorias',
        tag: 'Base de datos',
      },
      {
        title: 'Redis 7 + Bull + Puppeteer',
        subtitle: 'Cola en segundo plano para generación asíncrona de CV en PDF',
        tag: 'Workers PDF',
      },
    ],
  },
};

export function ProjectArchitectureDiagram({
  kind,
  compact = false,
}: {
  kind: ArchitectureDiagramKind;
  compact?: boolean;
}) {
  const data = diagramData[kind];

  const Icon =
    kind === 'vasochain'
      ? ShieldCheck
      : kind === 'yaku-alert'
        ? CloudRain
        : GraduationCap;

  return (
    <div className="rounded-xl border border-border-subtle bg-[#070A10] p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
          <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{data.header}</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
          <Boxes className="h-3 w-3" aria-hidden="true" />
          Arquitectura conceptual
        </span>
      </div>

      <div
        className={
          compact
            ? 'grid grid-cols-1 gap-2 sm:grid-cols-2'
            : 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'
        }
      >
        {data.nodes.map((node, index) => (
          <div
            key={node.title}
            className="relative flex flex-col justify-between rounded-lg border border-border-subtle bg-bg-elevated p-3"
          >
            <div>
              <span className="inline-block font-mono text-[10px] uppercase tracking-wider text-accent">
                0{index + 1} · {node.tag}
              </span>
              <p className="mt-1 font-display text-xs font-semibold text-text-primary sm:text-sm">
                {node.title}
              </p>
              {!compact && (
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                  {node.subtitle}
                </p>
              )}
            </div>
            {!compact && index < data.nodes.length - 1 && (
              <ArrowRight
                className="mt-2 hidden h-3.5 w-3.5 text-text-muted lg:block"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      {!compact && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
          <Database className="h-3.5 w-3.5 shrink-0 text-text-muted" aria-hidden="true" />
          <span>{data.caption}</span>
        </p>
      )}
    </div>
  );
}
