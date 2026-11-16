import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Layers,
  Terminal,
  Users,
} from 'lucide-react';
import {
  flagshipProjects,
  getAdjacentFlagshipProjects,
  getFlagshipProjectBySlug,
} from '@/data/projects';
import { achievements } from '@/data/achievements';
import { profile } from '@/data/profile';
import { absoluteUrl } from '@/lib/site';
import { ProjectArchitectureDiagram } from '@/components/projects/ProjectArchitectureDiagram';
import { ProjectVisualGallery } from '@/components/projects/ProjectVisualGallery';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getFlagshipProjectBySlug(slug);
  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  const image = project.visuals[0]?.src || profile.portraitPath;
  return {
    title: project.shortTitle,
    description: project.tagline,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Caso de estudio | ${profile.monogram}`,
      description: project.tagline,
      url: absoluteUrl(`/proyectos/${project.slug}`),
      images: [{ url: absoluteUrl(image), alt: project.name }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getFlagshipProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentFlagshipProjects(project.slug);
  const relatedAchievement = project.relatedAchievementId
    ? achievements.find((a) => a.id === project.relatedAchievementId)
    : undefined;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.tagline,
    codeRepository: project.repoUrl,
    programmingLanguage: project.confirmedStack,
    author: {
      '@type': 'Person',
      name: profile.fullName,
    },
    url: absoluteUrl(`/proyectos/${project.slug}`),
  };

  return (
    <article className="bg-ivory text-ink">
      {/* Cabecera oscura de alto contraste */}
      <header className="bg-carbon py-12 text-white sm:py-16">
        <div className="atelier-container max-w-5xl">
          <nav
            aria-label="Migas de pan"
            className="mb-8 flex items-center gap-2 font-mono text-xs text-editorial-muted"
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Proyectos</span>
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">
              {project.indexLabel} · {project.name}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-semibold text-cobalt-soft">
              {project.indexLabel}
            </span>
            <span className="h-px w-6 bg-white/20" aria-hidden="true" />
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-xs uppercase tracking-[0.1em] text-editorial-muted"
              >
                {cat}
              </span>
            ))}
            <span className="font-mono text-xs text-editorial-muted">· {project.year}</span>
            {project.recognitionBadge && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-cobalt/20 px-3 py-1 text-xs font-medium text-cobalt-soft ring-1 ring-cobalt/40">
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{project.recognitionBadge}</span>
              </span>
            )}
          </div>

          <h1 className="atelier-section-title mt-5 font-display font-semibold text-white">
            {project.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-editorial-muted sm:text-lg">
            {project.tagline}
          </p>

          <div className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-obsidian/70 p-5 text-xs sm:grid-cols-2 sm:text-sm">
            <div className="flex items-start gap-3">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-cobalt-soft" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Contexto y colaboración</p>
                <p className="mt-1 leading-relaxed text-editorial-muted">
                  {project.collaborationNote}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers className="mt-0.5 h-4 w-4 shrink-0 text-cobalt-soft" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Participación verificable</p>
                <p className="mt-1 leading-relaxed text-editorial-muted">{project.roleVerified}</p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              <span>Ver repositorio en GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
              >
                <span>{project.liveDemoLabel || 'Abrir aplicación'}</span>
                <ExternalLink className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Cuerpo editorial en Marfil */}
      <div className="atelier-container max-w-5xl py-12 sm:py-16">
        {project.disclaimer && (
          <aside
            aria-label="Nota técnica de alcance"
            className="mb-10 flex items-start gap-3 rounded-xl border border-amber-600/30 bg-amber-50 p-4 text-sm text-amber-950"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            <p className="leading-relaxed">{project.disclaimer}</p>
          </aside>
        )}

        {/* Problema y Solución */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cobalt">
              01 · Problema identificado
            </p>
            <p className="mt-3 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
              {project.problem}
            </p>
          </div>

          <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cobalt">
              02 · Solución propuesta
            </p>
            <p className="mt-3 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Capturas y/o Arquitectura técnica dentro del caso de estudio */}
        {project.visuals.length > 0 && (
          <section className="mt-12" aria-labelledby="visuals-heading">
            <h2
              id="visuals-heading"
              className="mb-5 font-display text-2xl font-semibold text-ink"
            >
              Capturas y evidencia visual
            </h2>
            <ProjectVisualGallery projectName={project.name} visuals={project.visuals} />
          </section>
        )}

        {project.architectureKind && (
          <section className="mt-12" aria-labelledby="arch-heading">
            <h2
              id="arch-heading"
              className="mb-5 font-display text-2xl font-semibold text-ink"
            >
              Arquitectura del sistema
            </h2>
            <ProjectArchitectureDiagram kind={project.architectureKind} />
          </section>
        )}

        {relatedAchievement && relatedAchievement.imagePath && (
          <section className="mt-12" aria-labelledby="achievement-linked-heading">
            <h2
              id="achievement-linked-heading"
              className="mb-5 font-display text-2xl font-semibold text-ink"
            >
              Reconocimiento asociado
            </h2>
            <DocumentPreviewCard
              achievement={relatedAchievement}
              horizontal
              ctaText="Ampliar documento"
            />
          </section>
        )}

        {/* Tecnologías, Arquitectura detallada y Resultados */}
        <section className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="rounded-xl border border-editorial-borderLight bg-white p-6 lg:col-span-7">
            <h2 className="font-display text-xl font-semibold text-ink">
              Decisiones técnicas y módulos
            </h2>
            <ul className="mt-4 space-y-3">
              {project.architectureSummary.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-editorial-inkMuted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-editorial-borderLight bg-white p-6 lg:col-span-5">
            <h2 className="font-display text-xl font-semibold text-ink">
              Stack tecnológico
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.confirmedStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-editorial-borderLight bg-ivory px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-5 border-t border-editorial-borderLight pt-4 font-mono text-[11px] text-editorial-inkMuted">
              {project.status}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-ink">
              Funcionalidades principales
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-editorial-inkMuted">
              {project.implementedFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-ink">
              Resultados sustentados
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-editorial-inkMuted">
              {project.verifiedResults.map((res) => (
                <li key={res} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="leading-relaxed">{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
            <h2 className="font-display text-xl font-semibold text-ink">
              Aprendizajes clave
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-editorial-inkMuted">
              {project.challengesAndLearnings.map((item) => (
                <li key={item} className="leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-editorial-borderLight bg-white p-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cobalt" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-ink">
                Verificación en código
              </h2>
            </div>
            <ol className="mt-4 space-y-2.5 text-sm text-editorial-inkMuted">
              {project.howToVerify.map((step, idx) => (
                <li key={step} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-cobalt">0{idx + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Navegación entre casos */}
        <nav
          aria-label="Navegación entre casos de estudio"
          className="mt-14 grid gap-4 border-t border-editorial-borderLight pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/proyectos/${prev.slug}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-editorial-borderLight bg-white p-5 transition-colors hover:border-ink/30"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-editorial-inkMuted">
                  Caso anterior
                </p>
                <p className="mt-1 font-display text-base font-semibold text-ink">
                  {prev.indexLabel} · {prev.name}
                </p>
              </div>
              <ArrowLeft className="h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={`/proyectos/${next.slug}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-editorial-borderLight bg-white p-5 text-right transition-colors hover:border-ink/30 sm:justify-end"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-editorial-inkMuted">
                  Siguiente caso
                </p>
                <p className="mt-1 font-display text-base font-semibold text-ink">
                  {next.indexLabel} · {next.name}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </article>
  );
}
