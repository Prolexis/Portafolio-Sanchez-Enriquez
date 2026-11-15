import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Perfil académico y técnico de ${profile.fullName}, ${profile.career} en la ${profile.university}.`,
  alternates: {
    canonical: '/sobre-mi',
  },
};

export default function SobreMiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Perfil profesional y académico
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 text-lg text-text-secondary">{profile.headline}</p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-text-secondary">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>{profile.university}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>{profile.location}</span>
            </span>
          </div>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            {profile.aboutNarrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-10 border-t border-border-subtle pt-8">
            <h2 className="font-display text-xl font-semibold text-text-primary">
              Principios de ingeniería
            </h2>
            <div className="mt-4 space-y-4">
              {profile.workPhilosophy.map((item) => (
                <div key={item.title} className="surface-card rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-base font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:col-span-5">
          <div className="surface-card overflow-hidden rounded-2xl p-3">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-border-subtle bg-[#070A10]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.portraitPath}
                alt={profile.portraitAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-3">
              <p className="font-display text-base font-semibold text-text-primary">
                {profile.career}
              </p>
              <p className="mt-0.5 text-xs text-text-muted">{profile.faculty}</p>
            </div>
          </div>

          <div className="surface-card rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary">
              Canales de contacto verificados
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary">
              {profile.availabilityStatus}. {profile.availabilityDetail}
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-[#060911] transition-colors hover:bg-accent-hover"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{profile.email}</span>
                </span>
              </a>

              <CopyEmailButton email={profile.email} className="w-full" />

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong bg-bg px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-accent/50"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-strong bg-bg px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-accent/50"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Áreas técnicas */}
      <section className="mt-14 border-t border-border-subtle pt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              Resumen de herramientas y lenguajes
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Tecnologías utilizadas en los casos de estudio del portafolio.
            </p>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
          >
            <span>Explorar proyectos</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id} className="surface-card rounded-xl p-5">
              <h3 className="font-display text-base font-semibold text-text-primary">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-md border border-border-subtle bg-bg px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
