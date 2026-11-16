import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Award, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { flagshipProjects, secondaryProjects } from '@/data/projects';
import { achievements } from '@/data/achievements';
import { AtelierProjectShowcase } from '@/components/projects/AtelierProjectShowcase';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';
import { TechStackGrid } from '@/components/ui/TechStackGrid';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { HeroMountReveal, Reveal } from '@/components/ui/MotionPrimitives';

export default function HomePage() {
  const syscoinRecognition = achievements.find((a) => a.id === 'syscoin-unt-2026');
  const sqlConstancia = achievements.find((a) => a.id === 'sql-server-2025');

  return (
    <div>
      {/* 1. HERO EDITORIAL — CARBÓN OSCURO (#101319) */}
      <section className="relative overflow-hidden bg-carbon text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[-60px] h-[440px] w-[440px] rounded-full bg-cobalt/15 blur-[120px]"
        />

        <div className="atelier-container relative py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Área izquierda — Tipografía protagonista */}
            <div className="lg:col-span-7">
              <HeroMountReveal delay={0}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt-soft">
                  {profile.heroEyebrow}
                </p>
              </HeroMountReveal>

              <HeroMountReveal delay={0.07}>
                <h1 className="atelier-hero-title mt-5 font-display font-semibold text-white">
                  <span className="block">{profile.heroTitleLine1}</span>
                  <span className="mt-1 block font-normal text-editorial-muted">
                    Inteligencia{' '}
                    <span className="text-cobalt-soft">aplicada.</span>
                  </span>
                </h1>
              </HeroMountReveal>

              <HeroMountReveal delay={0.14}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-editorial-muted sm:text-lg">
                  {profile.heroSubheadline}
                </p>
              </HeroMountReveal>

              <HeroMountReveal delay={0.21}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#proyectos"
                    className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
                  >
                    <span>Ver proyectos seleccionados</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/45 hover:bg-white/[0.04]"
                  >
                    <span>Hablemos</span>
                  </a>
                </div>
              </HeroMountReveal>
            </div>

            {/* Área derecha — Composición fotográfica editorial con marco Marfil intencional */}
            <HeroMountReveal delay={0.26} className="lg:col-span-5">
              <div className="mx-auto flex max-w-[290px] flex-col items-start lg:ml-auto lg:max-w-[310px]">
                <div className="relative w-full">
                  {/* Capa trasera arquitectónica */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 inset-0 rounded-lg border border-cobalt/35 bg-obsidian"
                  />

                  {/* Passepartout Marfil que integra naturalmente el fondo claro de estudio */}
                  <div className="relative rounded-lg bg-ivory p-3 shadow-atelierDark sm:p-3.5">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={profile.portraitPath}
                        alt={profile.portraitAlt}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Referencia real, discreta y elegante al premio nacional */}
                <Link
                  href="/logros"
                  className="group mt-7 flex w-full items-start justify-between gap-3 border-t border-white/15 pt-4 transition-colors hover:border-cobalt-soft/60"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt-soft">
                      {profile.heroAwardTag}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {profile.heroAwardText}
                    </p>
                  </div>
                  <Award
                    className="mt-0.5 h-4 w-4 shrink-0 text-editorial-muted transition-colors group-hover:text-cobalt-soft"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </HeroMountReveal>
          </div>
        </div>
      </section>

      {/* 2. PROYECTOS SELECCIONADOS — MARFIL (#F5F3EE) */}
      <section id="proyectos" aria-labelledby="projects-heading" className="bg-ivory py-20 text-ink lg:py-28">
        <div className="atelier-container">
          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-6 border-b border-editorial-borderLight pb-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <h2
                  id="projects-heading"
                  className="atelier-section-title font-display font-semibold text-ink"
                >
                  Proyectos seleccionados.
                </h2>
                <p className="mt-3 text-base text-editorial-inkMuted sm:text-lg">
                  Una selección de soluciones donde software, datos e inteligencia artificial se
                  encuentran.
                </p>
              </div>

              <Link
                href="/proyectos"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-cobalt transition-colors hover:text-cobalt-hover"
              >
                <span>
                  Ver todos ({flagshipProjects.length + secondaryProjects.length})
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <AtelierProjectShowcase projects={flagshipProjects} />
        </div>
      </section>

      {/* 3. TECNOLOGÍAS — BLANCO (#FFFFFF) */}
      <section
        id="especialidades"
        aria-labelledby="tech-heading"
        className="border-t border-editorial-borderLight bg-white py-20 text-ink lg:py-24"
      >
        <div className="atelier-container">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <h2
                  id="tech-heading"
                  className="atelier-section-title font-display font-semibold text-ink"
                >
                  Herramientas que convierto en soluciones.
                </h2>
              </div>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-editorial-inkMuted transition-colors hover:text-cobalt"
              >
                <span>Explorar uso por proyecto</span>
                <ArrowUpRight className="h-4 w-4 text-cobalt" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <TechStackGrid />
          </Reveal>
        </div>
      </section>

      {/* 4. RECONOCIMIENTOS Y LOGROS — NEGRO PROFUNDO (#0B0D12) */}
      <section
        id="logros"
        aria-labelledby="awards-heading"
        className="bg-obsidian py-20 text-white lg:py-28"
      >
        <div className="atelier-container">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <h2
                  id="awards-heading"
                  className="atelier-section-title font-display font-semibold text-white"
                >
                  Más allá del código.
                </h2>
                <p className="mt-3 text-base text-editorial-muted sm:text-lg">
                  Reconocimientos y formación que respaldan mi desarrollo profesional.
                </p>
              </div>

              <Link
                href="/logros"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cobalt-soft transition-colors hover:text-white"
              >
                <span>Archivo completo de logros</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-8">
            {syscoinRecognition && (
              <Reveal>
                <DocumentPreviewCard
                  achievement={syscoinRecognition}
                  horizontal
                  ctaText="Ampliar reconocimiento"
                />
              </Reveal>
            )}

            {sqlConstancia && (
              <Reveal delay={0.06}>
                <DocumentPreviewCard
                  achievement={sqlConstancia}
                  horizontal
                  ctaText="Ampliar constancia"
                />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 5. SOBRE MÍ — PERFIL HUMANO EDITORIAL EN MARFIL (#F5F3EE) */}
      <section
        id="sobre-mi"
        aria-labelledby="about-heading"
        className="border-b border-editorial-borderLight bg-ivory py-20 text-ink lg:py-28"
      >
        <div className="atelier-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt">
                Perfil y formación
              </p>
              <h2
                id="about-heading"
                className="atelier-section-title mt-3 font-display font-semibold text-ink"
              >
                Ingeniería en formación con criterio de producto.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
                {profile.aboutNarrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 border-b border-cobalt pb-1 text-sm font-semibold text-ink transition-colors hover:text-cobalt"
                >
                  <span>Leer perfil completo</span>
                  <ArrowRight className="h-4 w-4 text-cobalt" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-7">
              <div className="divide-y divide-editorial-borderLight border-y border-editorial-borderLight">
                {profile.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="grid gap-2 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-sm font-semibold text-cobalt sm:col-span-2">
                      {pillar.number} /
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. CONTACTO EDITORIAL — BLANCO / STONE (#FFFFFF) */}
      <section id="contacto" aria-labelledby="contact-heading" className="bg-white py-20 text-ink lg:py-24">
        <div className="atelier-container">
          <Reveal>
            <div className="grid gap-10 rounded-2xl border border-editorial-borderLight bg-ivory p-8 sm:p-12 lg:grid-cols-12 lg:items-end lg:p-16">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt">
                  Contacto directo
                </p>
                <h2
                  id="contact-heading"
                  className="atelier-section-title mt-3 font-display font-semibold text-ink"
                >
                  {profile.contactHeadline}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
                  {profile.contactSubheadline}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-md bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Hablemos</span>
                  </a>
                  <CopyEmailButton email={profile.email} tone="light" />
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-editorial-inkMuted sm:text-sm">
                  <span className="font-mono">{profile.email}</span>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-cobalt"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-cobalt"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
