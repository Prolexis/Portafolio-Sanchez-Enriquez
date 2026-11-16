import Link from 'next/link';
import { ArrowUpRight, Award, ExternalLink, GitBranch } from 'lucide-react';
import type { FlagshipProject } from '@/data/projects';
import { ProjectCoverIllustration } from '@/components/projects/ProjectCoverIllustration';

function ProjectCover({ project }: { project: FlagshipProject }) {
  if (project.coverImage) {
    return (
      <div className="overflow-hidden rounded-lg border border-editorial-borderLight bg-stone p-2">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </div>
    );
  }

  if (project.coverIllustration) {
    return <ProjectCoverIllustration kind={project.coverIllustration} />;
  }

  return null;
}

function ProjectMetaLinks({ project }: { project: FlagshipProject }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-editorial-borderLight pt-5">
      <Link
        href={`/proyectos/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-cobalt"
      >
        <span>Ver caso de estudio</span>
        <ArrowUpRight className="h-4 w-4 text-cobalt" aria-hidden="true" />
      </Link>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-editorial-inkMuted transition-colors hover:text-ink"
      >
        <GitBranch className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
        <span>GitHub</span>
      </a>

      {project.liveDemoUrl && (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-cobalt transition-colors hover:text-cobalt-hover"
        >
          <span>Demo</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export function AtelierProjectShowcase({
  projects,
  uniform = false,
}: {
  projects: FlagshipProject[];
  uniform?: boolean;
}) {
  if (uniform || projects.length < 4) {
    return (
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col justify-between rounded-2xl border border-editorial-borderLight bg-white p-6 shadow-atelier sm:p-7"
          >
            <div>
              <ProjectCover project={project} />
              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-medium text-cobalt">
                  {project.indexLabel}
                </span>
                <span className="text-xs text-editorial-inkMuted">
                  {project.editorialSubtitle}
                </span>
              </div>
              {project.recognitionBadge && (
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-cobalt/10 px-2.5 py-1 text-xs font-semibold text-cobalt">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{project.recognitionBadge}</span>
                  </span>
                </div>
              )}
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                <Link href={`/proyectos/${project.slug}`} className="hover:text-cobalt">
                  {project.name}
                </Link>
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-editorial-inkMuted">
                {project.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.previewTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-editorial-borderLight bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ProjectMetaLinks project={project} />
          </article>
        ))}
      </div>
    );
  }

  const [first, second, third, fourth, ...rest] = projects;

  return (
    <div className="space-y-10 lg:space-y-14">
      {/* 01 — Protagonista horizontal (VasoChainAI) */}
      {first && (
        <article className="group grid items-center gap-8 rounded-2xl border border-editorial-borderLight bg-white p-6 shadow-atelier sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="lg:col-span-7">
            <ProjectCover project={first} />
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-cobalt">
                {first.indexLabel}
              </span>
              <span className="h-px w-6 bg-editorial-borderLight" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-wider text-editorial-inkMuted">
                Proyecto protagonista
              </span>
            </div>

            {first.recognitionBadge && (
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-cobalt/10 px-3 py-1 text-xs font-semibold text-cobalt">
                  <Award className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{first.recognitionBadge}</span>
                </span>
              </div>
            )}

            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              <Link href={`/proyectos/${first.slug}`} className="transition-colors hover:text-cobalt">
                {first.name}
              </Link>
            </h3>

            <p className="mt-3 text-base leading-relaxed text-editorial-inkMuted">
              {first.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {first.previewTags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-editorial-borderLight bg-ivory px-3 py-1 text-xs font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ProjectMetaLinks project={first} />
          </div>
        </article>
      )}

      {/* 02 y 03 — Dos columnas asimétricas (MineSafe 3D y YAKU ALERT) */}
      {(second || third) && (
        <div className="grid gap-8 lg:grid-cols-2">
          {[second, third].filter(Boolean).map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between rounded-2xl border border-editorial-borderLight bg-white p-6 shadow-atelier sm:p-8"
            >
              <div>
                <ProjectCover project={project} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-cobalt">
                    {project.indexLabel}
                  </span>
                  <span className="h-px w-5 bg-editorial-borderLight" aria-hidden="true" />
                  <span className="text-xs text-editorial-inkMuted">
                    {project.editorialSubtitle}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                  <Link href={`/proyectos/${project.slug}`} className="transition-colors hover:text-cobalt">
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
                  {project.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.previewTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-editorial-borderLight bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ProjectMetaLinks project={project} />
            </article>
          ))}
        </div>
      )}

      {/* 04 — Protagonista invertido con UI real (Establo AI Leads) */}
      {fourth && (
        <article className="group grid items-center gap-8 rounded-2xl border border-editorial-borderLight bg-stone/70 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="lg:order-2 lg:col-span-7">
            <ProjectCover project={fourth} />
          </div>
          <div className="lg:order-1 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-cobalt">
                {fourth.indexLabel}
              </span>
              <span className="h-px w-6 bg-editorial-borderLight" aria-hidden="true" />
              <span className="text-xs text-editorial-inkMuted">
                {fourth.editorialSubtitle}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              <Link href={`/proyectos/${fourth.slug}`} className="transition-colors hover:text-cobalt">
                {fourth.name}
              </Link>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
              {fourth.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {fourth.previewTags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-editorial-borderLight bg-white px-2.5 py-1 text-xs font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ProjectMetaLinks project={fourth} />
          </div>
        </article>
      )}

      {/* 05 y 06 — Fila editorial de dos columnas */}
      {rest.length > 0 && (
        <div className="grid gap-8 lg:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between rounded-2xl border border-editorial-borderLight bg-white p-6 shadow-atelier sm:p-8"
            >
              <div>
                <ProjectCover project={project} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-cobalt">
                    {project.indexLabel}
                  </span>
                  <span className="h-px w-5 bg-editorial-borderLight" aria-hidden="true" />
                  <span className="text-xs text-editorial-inkMuted">
                    {project.editorialSubtitle}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                  <Link href={`/proyectos/${project.slug}`} className="transition-colors hover:text-cobalt">
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-editorial-inkMuted sm:text-base">
                  {project.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.previewTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-editorial-borderLight bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ProjectMetaLinks project={project} />
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
