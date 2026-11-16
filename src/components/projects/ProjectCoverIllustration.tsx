import { CheckCircle2, CloudRain, Compass, ShieldCheck } from 'lucide-react';
import type { CoverVisualKind } from '@/data/projects';

export function ProjectCoverIllustration({ kind }: { kind: CoverVisualKind }) {
  if (kind === 'vasochain-product') {
    return (
      <div className="relative flex min-h-[250px] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-4 text-white sm:aspect-[16/10] sm:p-7">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-cobalt/20 text-cobalt">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold tracking-tight text-white">
              VasoChainAI · Supervisión de Entregas
            </span>
          </div>
          <span className="font-mono text-[10px] text-mutedDark">
            Ilustración conceptual
          </span>
        </div>

        {/* Composición tipo UI de producto: comprobante + registro verificable */}
        <div className="my-auto grid gap-4 sm:grid-cols-12">
          <div className="rounded-lg bg-[#171D28] p-4 sm:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cobalt">
              Canal de campo · WhatsApp
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Evidencia fotográfica recibida
            </p>
            <div className="mt-3 flex items-center gap-2 rounded bg-carbon/80 px-3 py-2 text-xs text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Validado con Claude Vision</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 text-ink sm:col-span-7">
            <div className="flex items-center justify-between border-b border-ruleLight pb-2.5">
              <span className="text-xs font-semibold">Acta de Entrega #PVL-0412</span>
              <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-800">
                SELLADO ON-CHAIN
              </span>
            </div>
            <div className="mt-3 space-y-2 text-xs text-mutedLight">
              <div className="flex justify-between">
                <span>Beneficiario verificado</span>
                <span className="font-medium text-ink">Comité Sector 04</span>
              </div>
              <div className="flex justify-between">
                <span>Contrato inteligente</span>
                <span className="font-mono text-[11px] text-cobalt">DeliveryRegistry.sol</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-ruleDark pt-3 text-[11px] text-mutedDark">
          <span>Trazabilidad de asistencia alimentaria</span>
          <span className="font-mono text-white/80">3.er lugar nacional · 2026</span>
        </div>
      </div>
    );
  }

  if (kind === 'minesafe-3d') {
    return (
      <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-5 text-white sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-white">
            MineSafe 3D · Escena Tajo Abierto WebGL
          </span>
          <span className="font-mono text-[10px] text-mutedDark">
            Ilustración conceptual · 3D
          </span>
        </div>

        {/* Terrazas isométricas mineras + detección espacial de proximidad */}
        <div className="relative my-auto grid items-center gap-4 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <svg viewBox="0 0 340 165" className="h-auto w-full" aria-hidden="true">
              {/* Terrazas concéntricas estilo tajo abierto */}
              <polygon
                points="170,18 320,76 170,148 20,76"
                fill="#151B25"
                stroke="#2D3440"
                strokeWidth="1.2"
              />
              <polygon
                points="170,36 278,78 170,130 62,78"
                fill="#192130"
                stroke="#2D3440"
                strokeWidth="1.2"
              />
              <polygon
                points="170,54 236,80 170,112 104,80"
                fill="#1F2A3E"
                stroke="#4568EC"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              {/* Vehículo autónomo y camión manual + vector de proximidad */}
              <rect x="132" y="72" width="14" height="9" rx="2" fill="#FFFFFF" />
              <rect x="200" y="80" width="14" height="9" rx="2" fill="#4568EC" />
              <line
                x1="146"
                y1="76"
                x2="200"
                y2="84"
                stroke="#4568EC"
                strokeDasharray="3 3"
                strokeWidth="1.6"
              />
              <circle cx="139" cy="76" r="22" fill="none" stroke="#4568EC" strokeOpacity="0.35" />
            </svg>
          </div>

          <div className="space-y-2 rounded-lg bg-[#171D28] p-3.5 text-xs sm:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cobalt">
              Telemetría TreeSHAP
            </p>
            <div>
              <p className="text-[11px] text-mutedDark">Distancia LiDAR</p>
              <p className="font-mono text-sm font-semibold text-white">0.337 impacto</p>
            </div>
            <div>
              <p className="text-[11px] text-mutedDark">Velocidad GNSS</p>
              <p className="font-mono text-sm font-semibold text-white">0.120 impacto</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-ruleDark pt-3 text-[11px] text-mutedDark">
          <span>Flota mixta simulada · Three.js + FastAPI</span>
          <span className="font-mono text-cobalt">Simulación XAI</span>
        </div>
      </div>
    );
  }

  if (kind === 'yaku-map') {
    return (
      <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-[#E9ECEF] p-5 text-ink sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink">
            <CloudRain className="h-4 w-4 text-cobalt" aria-hidden="true" />
            <span>YAKU ALERT · Monitoreo Trujillo & UNT</span>
          </span>
          <span className="font-mono text-[10px] text-mutedLight">
            Ilustración conceptual · Mapa
          </span>
        </div>

        {/* Cartografía de monitoreo hidrometeorológico */}
        <div className="my-auto grid items-center gap-4 sm:grid-cols-12">
          <div className="rounded-lg bg-white p-2 shadow-sm sm:col-span-8">
            <svg viewBox="0 0 300 130" className="h-auto w-full" aria-hidden="true">
              <rect width="300" height="130" rx="6" fill="#F4F2ED" />
              {/* Retícula vial urbana */}
              <line x1="0" y1="45" x2="300" y2="45" stroke="#DADDE3" strokeWidth="1" />
              <line x1="0" y1="90" x2="300" y2="90" stroke="#DADDE3" strokeWidth="1" />
              <line x1="90" y1="0" x2="90" y2="130" stroke="#DADDE3" strokeWidth="1" />
              <line x1="210" y1="0" x2="210" y2="130" stroke="#DADDE3" strokeWidth="1" />
              {/* Corredor hídrico y zona UNT */}
              <path
                d="M12 108 C 74 96, 128 54, 194 58 C 240 60, 270 36, 292 22"
                fill="none"
                stroke="#4568EC"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="152" cy="68" r="18" fill="rgba(69,104,236,0.14)" />
              <circle cx="152" cy="68" r="5.5" fill="#4568EC" />
              <text x="164" y="84" fill="#171C25" fontSize="9" fontWeight="600">
                Campus UNT
              </text>
            </svg>
          </div>

          <div className="space-y-2.5 rounded-lg bg-white p-3.5 text-xs shadow-sm sm:col-span-4">
            <div className="flex items-center gap-1.5 font-semibold text-ink">
              <Compass className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
              <span>Estado preventivo</span>
            </div>
            <p className="text-[11px] leading-relaxed text-mutedLight">
              Corredores hídricos y escenarios diferenciados de pronóstico.
            </p>
            <span className="inline-block rounded bg-ivory px-2 py-1 font-mono text-[10px] text-ink">
              Ley N.° 29664
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-ruleLight pt-3 text-[11px] text-mutedLight">
          <span>Leaflet + Shapely · Open-Meteo</span>
          <span className="font-mono">Innova Norte 3G</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-5 text-white sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-white">Egresados System · Portal</span>
        <span className="font-mono text-[10px] text-mutedDark">Ilustración conceptual</span>
      </div>

      <div className="my-auto rounded-lg bg-white p-4 text-ink">
        <div className="flex items-center justify-between border-b border-ruleLight pb-2.5">
          <span className="font-display text-sm font-semibold">EgresadosNet</span>
          <span className="font-mono text-[11px] text-cobalt">Vercel Live</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded bg-ivory p-2.5">
            <p className="text-[11px] text-mutedLight">Vinculación</p>
            <p className="mt-0.5 font-semibold">Seguimiento laboral</p>
          </div>
          <div className="rounded bg-ivory p-2.5">
            <p className="text-[11px] text-mutedLight">Exportación</p>
            <p className="mt-0.5 font-semibold">CV PDF asíncrono</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-ruleDark pt-3 text-[11px] text-mutedDark">
        <span>Monorepo Next.js + NestJS + tRPC</span>
        <span className="font-mono text-cobalt">/auth/login</span>
      </div>
    </div>
  );
}
