import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Award, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { flagshipProjects, secondaryProjects } from '@/data/projects';
import { achievements } from '@/data/achievements';
import { AtelierProjectShowcase } from '@/components/projects/AtelierProjectShowcase';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';
import { FocusAreasSection } from '@/components/ui/FocusAreasSection';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { HeroMountReveal, Reveal } from '@/components/ui/MotionPrimitives';

export default function HomePage() {
  const syscoinRecognition = achievements.find((a) => a.id === 'syscoin-unt-2026');
  const sqlConstancia = achievements.find((a) => a.id === 'sql-server-2025');

  return (
    <div>
      {/* 1. HERO — FONDO CARBÓN (#10141B) */}
      <section data-header-theme="dark" className="bg-carbon text-white">
        <div className="signature-container py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Área izquierda — Tipografía protagonista */}
            <div className="min-w-0 lg:col-span-8">
              <HeroMountReveal delay={0}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cobalt sm:text-xs">
                  {profile.heroEyebrow}
                </p>
              </HeroMountReveal>

              <HeroMountReveal delay={0.07}>
                <h1 className="type-display mt-5 font-display font-semibold text-white">
                  <span className="block">{profile.heroTitleLine1}</span>
                  <span className="mt-1 block font-normal text-mutedDark">
                    {profile.heroTitleLine2}
                  </span>
                </h1>
              </HeroMountReveal>

              <HeroMountReveal delay={0.14}>
                <p className="type-body-lg mt-6 max-w-2xl font-medium text-white/90">
                  {profile.heroSubtitle}
                </p>
                <p className="type-body mt-3 max-w-xl text-mutedDark">
                  {profile.heroDescription}
                </p>
              </HeroMountReveal>

              <HeroMountReveal delay={0.21}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#proyectos"
                    className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
                  >
                    <span>Explorar proyectos</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-md border border-ruleDark px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/40"
                  >
                    <span>Contactar</span>
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-6 text-xs text-mutedDark sm:text-sm">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                  <span className="hidden h-3.5 w-px bg-ruleDark sm:inline-block" aria-hidden="true" />
                  <span>{profile.location}</span>
                </div>
              </HeroMountReveal>
            </div>

            {/* Área derecha — Composición fotográfica moderada y equilibrada */}
            <HeroMountReveal delay={0.26} className="min-w-0 lg:col-span-4">
              <div className="mx-auto flex w-full max-w-[235px] flex-col sm:max-w-[255px] lg:ml-auto">
                <div className="rounded-xl bg-ivory p-2.5 shadow-editorialDark">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={profile.portraitPath}
                      alt={profile.portraitAlt}
                      className="h-full w-full object-cover object-top brightness-[0.98] contrast-[1.03]"
                    />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] text-ink">
                    <span className="font-semibold">{profile.shortName}</span>
                    <span className="font-mono text-mutedLight">UNT · PE</span>
                  </div>
                </div>

                <Link
                  href="/logros"
                  className="group mt-5 flex items-start gap-2.5 border-t border-ruleDark pt-4 text-xs text-white/85 transition-colors hover:text-white"
                >
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
                  <span className="leading-relaxed">{profile.heroAwardText}</span>
                </Link>
              </div>
            </HeroMountReveal>
          </div>
        </div>
      </section>

      {/* 2. PROYECTOS — FONDO MARFIL (#F4F2ED) */}
      <section
        id="proyectos"
        data-header-theme="light"
        aria-labelledby="projects-heading"
        className="scroll-mt-20 bg-ivory py-20 text-ink lg:py-28"
      >
        <div className="signature-container">
          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-6 border-b border-ruleLight pb-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <h2
                  id="projects-heading"
                  className="type-h2 font-display font-semibold text-ink"
                >
                  Proyectos que hablan por sí mismos.
                </h2>
                <p className="type-body-lg mt-3 text-mutedLight">
                  Software, inteligencia artificial y datos aplicados a desafíos reales.
                </p>
              </div>

              <Link
                href="/proyectos"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-cobalt transition-colors hover:text-cobalt-hover"
              >
                <span>
                  Ver catálogo ({flagshipProjects.length + secondaryProjects.length})
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <AtelierProjectShowcase projects={flagshipProjects} />
        </div>
      </section>

      {/* 3. ESPECIALIDADES — SUPERFICIE BLANCA (#FFFFFF) */}
      <section
        id="especialidades"
        data-header-theme="light"
        aria-labelledby="focus-heading"
        className="scroll-mt-20 bg-white py-20 text-ink lg:py-24"
      >
        <div className="signature-container">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2
                id="focus-heading"
                className="type-h2 font-display font-semibold text-ink"
              >
                Mi enfoque tecnológico.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <FocusAreasSection />
          </Reveal>
        </div>
      </section>

      {/* 4. LOGROS — FONDO CARBÓN (#10141B) */}
      <section
        id="logros"
        data-header-theme="dark"
        aria-labelledby="awards-heading"
        className="scroll-mt-20 bg-carbon py-20 text-white lg:py-28"
      >
        <div className="signature-container">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-ruleDark pb-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <h2
                  id="awards-heading"
                  className="type-h2 font-display font-semibold text-white"
                >
                  El trabajo también deja huella.
                </h2>
                <p className="type-body-lg mt-3 text-mutedDark">
                  Aprendizaje, retos y reconocimientos que forman parte de mi trayectoria.
                </p>
              </div>

              <Link
                href="/logros"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cobalt transition-colors hover:text-white"
              >
                <span>Ver todos los logros</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-8">
            {syscoinRecognition && (
              <Reveal>
                <DocumentPreviewCard
                  achievement={syscoinRecognition}
                  variant="featured"
                  ctaText="Ampliar reconocimiento"
                />
              </Reveal>
            )}

            {sqlConstancia && (
              <Reveal delay={0.05}>
                <DocumentPreviewCard
                  achievement={sqlConstancia}
                  variant="secondary"
                  ctaText="Ver constancia"
                />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 5. SOBRE MÍ — FONDO MARFIL (#F4F2ED), SIN REPETIR RETRATO NI CONTACTO */}
      <section
        id="sobre-mi"
        data-header-theme="light"
        aria-labelledby="about-heading"
        className="scroll-mt-20 bg-ivory py-20 text-ink lg:py-24"
      >
        <div className="signature-container">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <h2
                  id="about-heading"
                  className="type-h2 font-display font-semibold text-ink"
                >
                  {profile.aboutTitle}
                </h2>
                <div className="mt-6 space-y-4 text-mutedLight">
                  {profile.aboutParagraphs.map((paragraph) => (
                    <p key={paragraph} className="type-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/sobre-mi"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt transition-colors hover:text-cobalt-hover"
                  >
                    <span>Conocer más sobre mi trayectoria</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="space-y-8 lg:col-span-6 lg:border-l lg:border-ruleLight lg:pl-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-cobalt">
                    Formación académica
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">
                    {profile.career}
                  </p>
                  <p className="mt-1 text-sm text-mutedLight">
                    {profile.university} · {profile.location}
                  </p>
                </div>

                <div className="border-t border-ruleLight pt-7">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-cobalt">
                    Áreas de interés
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded bg-white px-3.5 py-2 text-sm font-medium text-ink"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CONTACTO — CIERRE MEMORABLE SOBRE BLANCO (#FFFFFF) */}
      <section
        id="contacto"
        data-header-theme="light"
        aria-labelledby="contact-heading"
        className="scroll-mt-20 border-t border-ruleLight bg-white py-20 text-ink lg:py-24"
      >
        <div className="signature-container">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <h2
                  id="contact-heading"
                  className="type-h1 font-display font-semibold text-ink"
                >
                  {profile.contactTitle}
                </h2>
                <p className="type-body-lg mt-4 max-w-xl text-mutedLight">
                  {profile.contactText}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-md bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Enviar correo</span>
                  </a>
                  <CopyEmailButton email={profile.email} tone="light" />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-mutedLight">
                  <span className="font-mono text-xs">{profile.email}</span>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-cobalt"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-cobalt"
                  >
                    <span>GitHub</span>
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
