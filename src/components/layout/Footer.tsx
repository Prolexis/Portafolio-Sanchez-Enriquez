import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { MonogramCS } from '@/components/ui/MonogramCS';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <MonogramCS className="h-9 w-9" />
              <div>
                <p className="font-display text-base font-semibold text-text-primary">
                  {profile.brandLabel}
                </p>
                <p className="text-xs text-text-muted">
                  {profile.university} · {profile.location}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              Portafolio de ingeniería en desarrollo full-stack, inteligencia artificial aplicada y
              sistemas de datos con foco en evidencia y claridad arquitectónica.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Rutas
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-text-secondary transition-colors hover:text-text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos" className="text-text-secondary transition-colors hover:text-text-primary">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-mi" className="text-text-secondary transition-colors hover:text-text-primary">
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link href="/logros" className="text-text-secondary transition-colors hover:text-text-primary">
                    Logros
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Perfiles
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Contacto directo
              </h2>
              <div className="mt-3 space-y-2.5">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 break-all text-sm text-text-primary transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{profile.email}</span>
                </a>
                <div>
                  <CopyEmailButton email={profile.email} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-border-subtle pt-6 text-xs text-text-muted sm:flex-row sm:items-center">
          <p>{profile.fullName} — Portafolio técnico</p>
          <p>Construido con Next.js, TypeScript y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
