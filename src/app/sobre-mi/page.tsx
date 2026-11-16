import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { TechStackGrid } from '@/components/ui/TechStackGrid';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Perfil editorial de ${profile.fullName}, ${profile.career} en la ${profile.university}.`,
  alternates: {
    canonical: '/sobre-mi',
  },
};

export default function SobreMiPage() {
  return (
    <div>
      <div className="bg-carbon py-14 text-white sm:py-16">
        <div className="atelier-container">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-soft">
            Perfil editorial y formación
          </p>
          <h1 className="atelier-section-title mt-3 font-display font-semibold text-white">
            {profile.fullName}
          </h1>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-editorial-muted">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
              <span>
                {profile.career} — {profile.university}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
              <span>{profile.location}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-ivory py-14 text-ink sm:py-20">
        <div className="atelier-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Enfoque de ingeniería y formación universitaria
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
                {profile.aboutNarrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <section className="mt-12">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-cobalt">
                  Especializaciones y pilares
                </h3>
                <div className="divide-y divide-editorial-borderLight border-y border-editorial-borderLight">
                  {profile.pillars.map((pillar) => (
                    <div
                      key={pillar.number}
                      className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                    >
                      <span className="font-mono text-sm font-semibold text-cobalt sm:col-span-2">
                        {pillar.number} /
                      </span>
                      <div className="sm:col-span-10">
                        <h4 className="font-display text-lg font-semibold text-ink">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-editorial-inkMuted">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-cobalt">
                  Áreas de interés
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {profile.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-lg border border-editorial-borderLight bg-white px-4 py-3 text-sm font-medium text-ink"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <div className="mx-auto max-w-xs rounded-xl border border-editorial-borderLight bg-white p-3.5 shadow-atelier lg:ml-auto lg:max-w-sm">
                <div className="aspect-[4/5] w-full overflow-hidden rounded bg-ivory">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.portraitPath}
                    alt={profile.portraitAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="font-display text-base font-semibold text-ink">
                    {profile.career}
                  </p>
                  <p className="mt-0.5 text-xs text-editorial-inkMuted">{profile.faculty}</p>
                </div>
              </div>

              <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
                <h2 className="font-display text-lg font-semibold text-ink">
                  Contacto directo
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-editorial-inkMuted">
                  {profile.availabilityStatus}. {profile.availabilityDetail}
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-center gap-2 rounded-md bg-cobalt px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
                  >
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Hablemos</span>
                  </a>

                  <CopyEmailButton email={profile.email} tone="light" className="w-full" />

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md border border-editorial-borderLight bg-ivory px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/30"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                    </a>
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-md border border-editorial-borderLight bg-ivory px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-ink/30"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section className="border-t border-editorial-borderLight bg-white py-16 text-ink">
        <div className="atelier-container">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Herramientas que convierto en soluciones.
            </h2>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
            >
              <span>Ver proyectos</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <TechStackGrid />
        </div>
      </section>
    </div>
  );
}
