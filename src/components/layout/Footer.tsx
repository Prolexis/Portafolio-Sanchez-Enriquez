import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import { BrandWordmark } from '@/components/ui/MonogramCS';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ruleDark bg-carbon text-white">
      <div className="signature-container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          <div className="min-w-0 md:col-span-5">
            <Link href="/" className="inline-block text-white">
              <BrandWordmark className="text-2xl" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mutedDark">
              {profile.fullName}. {profile.career} en la {profile.university}.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mutedDark">
                Navegación
              </h2>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-white/85 transition-colors hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos" className="text-white/85 transition-colors hover:text-white">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/logros" className="text-white/85 transition-colors hover:text-white">
                    Logros
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-mi" className="text-white/85 transition-colors hover:text-white">
                    Sobre mí
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mutedDark">
                Perfiles
              </h2>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                <li>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/85 transition-colors hover:text-white"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white/85 transition-colors hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mutedDark">
                Correo
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3.5 block break-all text-sm text-white transition-colors hover:text-cobalt"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-ruleDark pt-6 text-xs text-mutedDark sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
            <span>{profile.location} · Signature Engineering</span>
          </div>
          <p className="font-mono">© {currentYear} {profile.shortName}</p>
        </div>
      </div>
    </footer>
  );
}
