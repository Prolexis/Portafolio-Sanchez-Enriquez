import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { flagshipProjects, secondaryProjects } from '@/data/projects';
import { achievements } from '@/data/achievements';
import { skillGroups } from '@/data/skills';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { HeroMountReveal, Reveal } from '@/components/ui/MotionPrimitives';

export default function HomePage() {
  const syscoinRecognition = achievements.find((a) => a.id === 'syscoin-unt-2026');
  const sqlConstancia = achievements.find((a) => a.id === 'sql-server-2025');

  return (
    <div className="pb-20">
      {/* 1. HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <HeroMountReveal className="lg:col-span-7">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>{profile.availabilityStatus}</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-5xl">
              {profile.fullName}
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-text-primary/95 sm:text-xl">
              {profile.headline}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {profile.subheadline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-secondary sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{profile.university}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{profile.location}</span>
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#060911] transition-colors hover:bg-accent-hover"
              >
                <span>Explorar proyectos</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-bg-card px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-subtle"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Contactar</span>
              </a>

              <CopyEmailButton email={profile.email} />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-text-muted sm:text-sm">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
              >
                <span>github.com/{profile.handle}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              </a>
              <span aria-hidden="true">·</span>
              <Link
                href="/logros"
                className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
              >
                <Award className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>3.er lugar nacional Hackathon Syscoin (UNT)</span>
              </Link>
            </div>
          </HeroMountReveal>

          <HeroMountReveal delay={0.08} className="lg:col-span-5">
            <div className="surface-card relative mx-auto max-w-sm overflow-hidden rounded-2xl p-3 sm:p-4 lg:ml-auto lg:max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border-subtle bg-[#070A10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.portraitPath}
                  alt={profile.portraitAlt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 px-1 text-xs">
                <div>
                  <p className="font-display font-semibold text-text-primary">
                    {profile.shortName}
                  </p>
                  <p className="text-text-muted">{profile.career} · UNT</p>
                </div>
                <span className="rounded-md border border-border-strong bg-bg px-2.5 py-1 font-mono text-[11px] text-accent">
                  @{profile.handle}
                </span>
              </div>
            </div>
          </HeroMountReveal>
        </div>

        {/* Franja de especialidades */}
        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.specialties.map((item) => (
              <div
                key={item.id}
                className="surface-card rounded-xl p-4 sm:p-5"
              >
                <p className="font-display text-sm font-semibold text-text-primary">
                  {item.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2. PROYECTOS DESTACADOS */}
      <section
        aria-labelledby="featured-projects-heading"
        className="border-t border-border-subtle bg-bg-elevated/45 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Portafolio técnico · {flagshipProjects.length} casos de estudio
              </p>
              <h2
                id="featured-projects-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
              >
                Proyectos seleccionados
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-text-secondary sm:text-base">
                Sistemas construidos con contratos tipados, repositorios auditables y separación
                clara entre entorno académico, experimental y despliegue web.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
            >
              <span>
                Ver catálogo completo ({flagshipProjects.length + secondaryProjects.length})
              </span>
              <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {flagshipProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. RECONOCIMIENTO NACIONAL RESPALDADO POR DOCUMENTO */}
      {syscoinRecognition && (
        <section
          aria-labelledby="recognition-spotlight-heading"
          className="border-t border-border-subtle py-16 lg:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    Evidencia institucional verificable
                  </p>
                  <h2
                    id="recognition-spotlight-heading"
                    className="mt-2 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
                  >
                    Reconocimiento nacional, respaldado por documento
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-text-secondary">
                    Certificado físico emitido y sellado por la Escuela de Ingeniería de Sistemas de
                    la UNT tras obtener el tercer lugar nacional en la Hackathon Syscoin con
                    VasoChainAI.
                  </p>
                </div>
                <Link
                  href="/logros"
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  <span>Todos los logros y constancias</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <DocumentPreviewCard
                achievement={syscoinRecognition}
                horizontal
                ctaText="Inspeccionar documento firmado"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* 4. STACK TÉCNICO AGRUPADO */}
      <section
        aria-labelledby="skills-heading"
        className="border-t border-border-subtle bg-bg-elevated/45 py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Capacidades técnicas
            </p>
            <h2
              id="skills-heading"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
            >
              Stack aplicado en proyectos reales
            </h2>
            <p className="mt-2 text-sm text-text-secondary sm:text-base">
              Sin porcentajes arbitrarios: cada tecnología aparece vinculada directamente a los
              repositorios donde fue implementada y probada.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.id} className="surface-card rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {group.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-text-secondary sm:text-sm">
                  {group.description}
                </p>

                <ul className="mt-5 space-y-3 border-t border-border-subtle pt-4">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center"
                    >
                      <div>
                        <p className="text-sm font-medium text-text-primary">{item.name}</p>
                        <p className="text-xs text-text-muted">{item.context}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.projectSlugs.map((slug) => (
                          <Link
                            key={slug}
                            href={`/proyectos/${slug}`}
                            className="rounded border border-border-subtle bg-bg px-2 py-0.5 font-mono text-[11px] text-accent transition-colors hover:border-accent/50"
                          >
                            {slug}
                          </Link>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOBRE MÍ (RESUMEN) & 6. FORMACIÓN COMPLEMENTARIA */}
      <section className="border-t border-border-subtle py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="surface-card rounded-2xl p-6 sm:p-8 lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Perfil de ingeniería
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-text-primary">
                Cómo abordo cada sistema
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                {profile.aboutNarrative[0]}
              </p>

              <ul className="mt-6 space-y-3 border-t border-border-subtle pt-5">
                {profile.workPhilosophy.map((principle) => (
                  <li key={principle.title} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary">{principle.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  <span>Leer perfil completo y formación UNT</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mb-4 flex items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    Formación complementaria
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-text-primary">
                    Constancias verificadas
                  </h2>
                </div>
                <Link
                  href="/logros"
                  className="text-xs font-medium text-text-secondary hover:text-accent"
                >
                  Ver todos los logros →
                </Link>
              </div>
              {sqlConstancia && (
                <DocumentPreviewCard
                  achievement={sqlConstancia}
                  ctaText="Ampliar constancia"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CIERRE / CONTACTO DIRECTO */}
      <section
        id="contacto"
        aria-labelledby="contact-cta-heading"
        className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div className="surface-card rounded-2xl border-accent/25 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-accent">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Contacto directo verificado</span>
              </div>
              <h2
                id="contact-cta-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl"
              >
                ¿Buscas talento para ingeniería full-stack, IA aplicada o datos?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                {profile.availabilityDetail} Puedes escribirme directamente por correo institucional
                o revisar la actividad técnica en mis repositorios.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#060911] transition-colors hover:bg-accent-hover sm:w-auto"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{profile.email}</span>
              </a>
              <div className="flex flex-wrap gap-2.5">
                <CopyEmailButton email={profile.email} />
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
