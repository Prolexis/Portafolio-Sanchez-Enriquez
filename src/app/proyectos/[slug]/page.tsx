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
      title: `${project.name} — Caso de estudio | ${profile.shortName}`,
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
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <nav aria-label="Migas de pan" className="mb-6 flex items-center gap-2 text-xs text-text-muted">
        <Link href="/proyectos" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Proyectos</span>
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-text-primary">{project.name}</span>
      </nav>

      {/* CABECERA */}
      <header className="border-b border-border-subtle pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-md border border-border-subtle bg-bg-card px-2.5 py-0.5 font-mono text-xs text-text-secondary"
            >
              {cat}
            </span>
          ))}
          <span className="font-mono text-xs text-text-muted">· {project.year}</span>
          {project.recognitionBadge && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{project.recognitionBadge}</span>
            </span>
          )}
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          {project.name}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {project.tagline}
        </p>

        <div className="mt-6 grid gap-3 rounded-xl border border-border-subtle bg-bg-elevated p-4 text-xs sm:grid-cols-2 sm:text-sm">
          <div className="flex items-start gap-2.5">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="font-semibold text-text-primary">Contexto y colaboración</p>
              <p className="mt-0.5 text-text-secondary">{project.collaborationNote}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Layers className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="font-semibold text-text-primary">Rol y estado técnico</p>
              <p className="mt-0.5 text-text-secondary">{project.roleVerified}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-[#060911] transition-colors hover:bg-accent-hover"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            <span>Ver repositorio en GitHub</span>
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-bg-card px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
            >
              <span>{project.liveDemoLabel || 'Abrir demo desplegada'}</span>
              <ExternalLink className="h-4 w-4 text-accent" aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      {/* AVISO DE ALCANCE / DISCLAMER CUANDO CORRESPONDE */}
      {project.disclaimer && (
        <aside
          aria-label="Nota técnica de alcance"
          className="mt-8 flex items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-500/10 p-4 text-sm text-amber-100/90"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="leading-relaxed">{project.disclaimer}</p>
        </aside>
      )}

      {/* EVIDENCIA VISUAL O ARQUITECTURA */}
      <section className="mt-10" aria-labelledby="visuals-heading">
        <h2
          id="visuals-heading"
          className="mb-4 font-display text-xl font-semibold text-text-primary"
        >
          {project.visuals.length > 0
            ? 'Evidencia visual y diagramas del proyecto'
            : 'Arquitectura conceptual del sistema'}
        </h2>

        {project.visuals.length > 0 ? (
          <ProjectVisualGallery projectName={project.name} visuals={project.visuals} />
        ) : project.architectureKind ? (
          <ProjectArchitectureDiagram kind={project.architectureKind} />
        ) : null}
      </section>

      {/* RECONOCIMIENTO VINCULADO (EJ. VASOCHAIN UNT) */}
      {relatedAchievement && relatedAchievement.imagePath && (
        <section className="mt-10" aria-labelledby="achievement-linked-heading">
          <h2
            id="achievement-linked-heading"
            className="mb-4 font-display text-xl font-semibold text-text-primary"
          >
            Documento institucional asociado
          </h2>
          <DocumentPreviewCard
            achievement={relatedAchievement}
            horizontal
            ctaText="Ver documento completo"
          />
        </section>
      )}

      {/* PROBLEMA Y SOLUCIÓN */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="surface-card rounded-2xl p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">01 · Problema</p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
            {project.problem}
          </p>
        </div>

        <div className="surface-card rounded-2xl p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">02 · Solución</p>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
            {project.solution}
          </p>
        </div>
      </section>

      {/* ARQUITECTURA & STACK */}
      <section className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="surface-card rounded-2xl p-6 lg:col-span-7">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Resumen arquitectónico
          </h2>
          <ul className="mt-4 space-y-3">
            {project.architectureSummary.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card rounded-2xl p-6 lg:col-span-5">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Stack confirmado
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.confirmedStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border-strong bg-bg px-3 py-1.5 text-xs font-medium text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-4 border-t border-border-subtle pt-4 text-xs text-text-muted">
            Estado: {project.status}
          </p>
        </div>
      </section>

      {/* FUNCIONALIDADES Y RESULTADOS */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="surface-card rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Funcionalidades implementadas
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
            {project.implementedFeatures.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Resultados verificables
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
            {project.verifiedResults.map((res) => (
              <li key={res} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span className="leading-relaxed">{res}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RETOS + CÓMO VERIFICAR */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="surface-card rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Retos técnicos y aprendizajes
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-text-secondary">
            {project.challengesAndLearnings.map((item) => (
              <li key={item} className="leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-accent" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-text-primary">
              Cómo verificar este proyecto
            </h2>
          </div>
          <ol className="mt-4 space-y-2.5 text-sm text-text-secondary">
            {project.howToVerify.map((step, idx) => (
              <li key={step} className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-semibold text-accent">0{idx + 1}.</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NAVEGACIÓN ENTRE CASOS */}
      <nav
        aria-label="Navegación entre casos de estudio"
        className="mt-12 grid gap-4 border-t border-border-subtle pt-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/proyectos/${prev.slug}`}
            className="surface-card surface-card-hover flex items-center justify-between gap-4 rounded-xl p-4"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                Caso anterior
              </p>
              <p className="mt-1 font-display text-base font-semibold text-text-primary">
                {prev.name}
              </p>
            </div>
            <ArrowLeft className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            href={`/proyectos/${next.slug}`}
            className="surface-card surface-card-hover flex items-center justify-between gap-4 rounded-xl p-4 text-right sm:justify-end"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                Siguiente caso
              </p>
              <p className="mt-1 font-display text-base font-semibold text-text-primary">
                {next.name}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          </Link>
        )}
      </nav>

      <div className="mt-6 text-center">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Volver a todos los proyectos</span>
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </article>
  );
}
