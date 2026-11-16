import { CheckCircle2, CloudRain, FileText, ShieldCheck } from 'lucide-react';
import type { CoverVisualKind } from '@/data/projects';

export function ProjectCoverIllustration({ kind }: { kind: CoverVisualKind }) {
  if (kind === 'vasochain-product') {
    return (
      <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-5 text-white sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-cobalt/20 blur-3xl"
        />

        <div className="relative flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
            <ShieldCheck className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
            <span>Trazabilidad Vaso de Leche</span>
          </span>
          <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-editorial-muted">
            Ilustración conceptual
          </span>
        </div>

        <div className="relative my-auto grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-cobalt-soft">
              01 · Evidencia
            </p>
            <p className="mt-1.5 font-display text-sm font-semibold text-white">
              Reporte WhatsApp
            </p>
            <p className="mt-1 text-[11px] text-editorial-muted">
              Foto de entrega recibida desde punto municipal
            </p>
          </div>

          <div className="rounded-lg border border-cobalt/40 bg-cobalt/15 p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-white">
              02 · Validación IA
            </p>
            <p className="mt-1.5 font-display text-sm font-semibold text-white">
              Claude Vision
            </p>
            <p className="mt-1 text-[11px] text-white/80">
              Verificación automática de ración y beneficiario
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              03 · Sello on-chain
            </p>
            <p className="mt-1.5 font-display text-sm font-semibold text-white">
              DeliveryRegistry
            </p>
            <p className="mt-1 text-[11px] text-editorial-muted">
              Hash inmutable auditable en contrato inteligente
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-editorial-muted">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Auditoría verificable de extremo a extremo</span>
          </span>
          <span className="hidden font-mono sm:inline">Syscoin Hackathon · 2026</span>
        </div>
      </div>
    );
  }

  if (kind === 'minesafe-3d') {
    return (
      <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-5 text-white sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-white/85">
            Gemelo Digital 3D · Proximidad de Flota
          </span>
          <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-editorial-muted">
            Ilustración conceptual
          </span>
        </div>

        <div className="relative mx-auto my-auto flex w-full max-w-sm items-center justify-center py-2">
          <svg viewBox="0 0 320 150" className="h-auto w-full" aria-hidden="true">
            <ellipse
              cx="160"
              cy="85"
              rx="128"
              ry="48"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeDasharray="4 4"
            />
            <ellipse
              cx="160"
              cy="85"
              rx="86"
              ry="32"
              fill="none"
              stroke="rgba(63,99,232,0.5)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="160"
              cy="85"
              rx="42"
              ry="16"
              fill="rgba(63,99,232,0.18)"
              stroke="#7399FF"
              strokeWidth="1.5"
            />
            <circle cx="160" cy="85" r="5" fill="#FFFFFF" />
            <circle cx="225" cy="70" r="5" fill="#7399FF" />
            <line x1="165" y1="84" x2="220" y2="71" stroke="#7399FF" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-editorial-muted">
          <span>Escena WebGL Three.js + Explicabilidad TreeSHAP</span>
          <span className="font-mono text-cobalt-soft">Simulación</span>
        </div>
      </div>
    );
  }

  if (kind === 'yaku-map') {
    return (
      <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-5 text-white sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85">
            <CloudRain className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
            <span>Trujillo · Corredores Hídricos UNT</span>
          </span>
          <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-editorial-muted">
            Ilustración conceptual
          </span>
        </div>

        <div className="relative my-auto py-2">
          <svg viewBox="0 0 320 130" className="h-auto w-full" aria-hidden="true">
            <path
              d="M15 95 C 75 80, 120 40, 185 52 C 235 60, 265 30, 305 26"
              fill="none"
              stroke="#3F63E8"
              strokeWidth="2.5"
            />
            <path
              d="M15 112 C 95 100, 145 70, 210 78 C 250 82, 275 62, 305 56"
              fill="none"
              stroke="rgba(255,255,255,0.16)"
              strokeDasharray="4 4"
            />
            <circle cx="185" cy="52" r="5" fill="#7399FF" />
            <circle cx="185" cy="52" r="14" fill="rgba(115,153,255,0.18)" />
          </svg>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-editorial-muted">
          <span>Cartografía Leaflet · Monitoreo y Respuesta</span>
          <span className="font-mono">Ley N.° 29664</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-lg bg-carbon p-5 text-white sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/85">
          <FileText className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
          <span>Portal de Egresados y CV PDF</span>
        </span>
        <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-editorial-muted">
          Ilustración conceptual
        </span>
      </div>

      <div className="my-auto grid grid-cols-3 gap-2.5">
        <div className="col-span-2 rounded-lg border border-white/10 bg-white/[0.04] p-3">
          <p className="font-display text-xs font-semibold text-white">Perfil Profesional</p>
          <p className="mt-1 text-[11px] text-editorial-muted">
            Seguimiento laboral, ofertas y estado de empleabilidad
          </p>
        </div>
        <div className="rounded-lg border border-cobalt/40 bg-cobalt/15 p-3">
          <p className="font-mono text-[10px] text-cobalt-soft">PDF</p>
          <p className="mt-1 text-[11px] font-medium text-white">CV Generado</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-editorial-muted">
        <span>Acceso autenticado en Vercel</span>
        <span className="font-mono text-cobalt-soft">/auth/login</span>
      </div>
    </div>
  );
}
