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
import { ProjectCoverIllustration } from '@/components/projects/ProjectCoverIllustration';
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
      {/* Cabecera clara de lectura editorial */}
      <header data-header-theme="light" className="border-b border-ruleLight bg-ivory py-12 sm:py-16">
        <div className="signature-container max-w-5xl">
          <nav
            aria-label="Migas de pan"
            className="mb-8 flex items-center gap-2 font-mono text-xs text-mutedLight"
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Proyectos</span>
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">
              {project.indexLabel} · {project.name}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-semibold text-cobalt">
              {project.indexLabel}
            </span>
            <span className="h-px w-6 bg-ruleLight" aria-hidden="true" />
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="font-mono text-xs uppercase tracking-[0.1em] text-mutedLight"
              >
                {cat}
              </span>
            ))}
            <span className="font-mono text-xs text-mutedLight">· {project.year}</span>
            {project.recognitionBadge && (
              <span className="inline-flex items-center gap-1.5 rounded bg-cobalt/10 px-3 py-1 text-xs font-semibold text-cobalt">
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{project.recognitionBadge}</span>
              </span>
            )}
          </div>

          <h1 className="type-h1 mt-5 font-display font-semibold text-ink">
            {project.name}
          </h1>

          <p className="type-body-lg mt-4 max-w-3xl text-mutedLight">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 rounded-md border border-ruleLight bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/35"
              >
                <span>{project.liveDemoLabel || 'Abrir aplicación'}</span>
                <ExternalLink className="h-4 w-4 text-cobalt" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* 1. Portada visual */}
          <div className="mt-10">
            {project.coverImage ? (
              <div className="overflow-hidden rounded-xl bg-white p-3 shadow-editorialLight">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-ivory">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ) : project.coverIllustration ? (
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-editorialLight">
                <ProjectCoverIllustration kind={project.coverIllustration} />
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div data-header-theme="light" className="signature-container max-w-5xl py-12 sm:py-16">
        {project.disclaimer && (
          <aside
            aria-label="Nota técnica de alcance"
            className="mb-10 flex items-start gap-3 rounded-xl border border-amber-600/30 bg-amber-50 p-4 text-sm text-amber-950"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            <p className="leading-relaxed">{project.disclaimer}</p>
          </aside>
        )}

        {/* 2 & 3. Problema y Solución */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-7 shadow-editorialLight">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cobalt">
              01 · Problema
            </p>
            <p className="type-body mt-3 text-mutedLight">{project.problem}</p>
          </div>

          <div className="rounded-xl bg-white p-7 shadow-editorialLight">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-cobalt">
              02 · Solución
            </p>
            <p className="type-body mt-3 text-mutedLight">{project.solution}</p>
          </div>
        </section>

        {/* 4 & 5. Funcionalidades y Participación real */}
        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-7 shadow-editorialLight">
            <h2 className="font-display text-xl font-semibold text-ink">
              Funcionalidades implementadas
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-mutedLight">
              {project.implementedFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-7 shadow-editorialLight">
            <h2 className="font-display text-xl font-semibold text-ink">
              Participación real y contexto
            </h2>
            <div className="mt-4 space-y-4 text-sm text-mutedLight">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
                <p className="leading-relaxed">{project.collaborationNote}</p>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
                <p className="leading-relaxed">{project.roleVerified}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Arquitectura técnica (en páginas interiores sí va en profundidad) */}
        <section className="mt-12">
          <h2 className="mb-5 font-display text-2xl font-semibold text-ink">
            Arquitectura técnica y módulos
          </h2>
          {project.architectureKind ? (
            <ProjectArchitectureDiagram kind={project.architectureKind} />
          ) : null}

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <div className="rounded-xl bg-white p-7 shadow-editorialLight lg:col-span-7">
              <ul className="space-y-3">
                {project.architectureSummary.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-mutedLight">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-editorialLight lg:col-span-5">
              <h3 className="font-display text-lg font-semibold text-ink">
                Tecnologías verificadas
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.confirmedStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-ivory px-3 py-1.5 text-xs font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Capturas */}
        {project.visuals.length > 0 && (
          <section className="mt-12" aria-labelledby="visuals-heading">
            <h2
              id="visuals-heading"
              className="mb-5 font-display text-2xl font-semibold text-ink"
            >
              Capturas y gráficos del repositorio
            </h2>
            <ProjectVisualGallery projectName={project.name} visuals={project.visuals} />
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
            <div className="rounded-2xl bg-carbon p-2">
              <DocumentPreviewCard
                achievement={relatedAchievement}
                variant="featured"
                ctaText="Ampliar reconocimiento"
              />
            </div>
          </section>
        )}

        {/* 9 & 10. Resultados y verificación */}
        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-7 shadow-editorialLight">
            <h2 className="font-display text-xl font-semibold text-ink">
              Resultados comprobables
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-mutedLight">
              {project.verifiedResults.map((res) => (
                <li key={res} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="leading-relaxed">{res}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-7 shadow-editorialLight">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cobalt" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-ink">
                Verificación en repositorio
              </h2>
            </div>
            <ol className="mt-4 space-y-2.5 text-sm text-mutedLight">
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
          className="mt-14 grid gap-4 border-t border-ruleLight pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/proyectos/${prev.slug}`}
              className="flex items-center justify-between gap-4 rounded-xl bg-white p-5 shadow-editorialLight transition-shadow hover:shadow-lg"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mutedLight">
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
              className="flex items-center justify-between gap-4 rounded-xl bg-white p-5 text-right shadow-editorialLight transition-shadow hover:shadow-lg sm:justify-end"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mutedLight">
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
