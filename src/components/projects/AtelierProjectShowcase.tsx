import Link from 'next/link';
import { ArrowUpRight, Award, ExternalLink, GitBranch } from 'lucide-react';
import type { FlagshipProject } from '@/data/projects';
import { ProjectCoverIllustration } from '@/components/projects/ProjectCoverIllustration';

function ProjectCover({ project }: { project: FlagshipProject }) {
  if (project.coverImage) {
    return (
      <div className="overflow-hidden rounded-lg bg-ivory p-2">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
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

function ProjectLinks({ project }: { project: FlagshipProject }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-ruleLight pt-5">
      <Link
        href={`/proyectos/${project.slug}`}
        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-cobalt"
      >
        <span>Ver caso de estudio</span>
        <ArrowUpRight
          className="h-4 w-4 text-cobalt transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-mutedLight transition-colors hover:text-ink"
      >
        <GitBranch className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
        <span>Repositorio</span>
      </a>

      {project.liveDemoUrl && (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-cobalt transition-colors hover:text-cobalt-hover"
        >
          <span>Abrir demo</span>
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
            className="group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-editorialLight transition-shadow duration-300 hover:shadow-xl sm:p-7"
          >
            <div>
              <ProjectCover project={project} />
              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-cobalt">
                  {project.indexLabel}
                </span>
                <span className="text-xs text-mutedLight">{project.editorialSubtitle}</span>
              </div>
              {project.recognitionBadge && (
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded bg-cobalt/10 px-2.5 py-1 text-xs font-semibold text-cobalt">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{project.recognitionBadge}</span>
                  </span>
                </div>
              )}
              <h3 className="type-h3 mt-3 font-display font-semibold text-ink">
                <Link href={`/proyectos/${project.slug}`} className="hover:text-cobalt">
                  {project.name}
                </Link>
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mutedLight">
                {project.tagline}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.previewTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ProjectLinks project={project} />
          </article>
        ))}
      </div>
    );
  }

  const [vasoChain, mineSafe, yakuAlert, establo, ...remaining] = projects;

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* BLOQUE 1: PROTAGONISTA — VasoChainAI */}
      {vasoChain && (
        <article className="group grid items-center gap-8 rounded-2xl bg-white p-5 shadow-editorialLight sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-11">
          <div className="min-w-0 lg:col-span-7">
            <ProjectCover project={vasoChain} />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-cobalt">
                {vasoChain.indexLabel}
              </span>
              <span className="h-px w-6 bg-ruleLight" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-wider text-mutedLight">
                Proyecto destacado
              </span>
            </div>

            {vasoChain.recognitionBadge && (
              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded bg-cobalt/10 px-3 py-1.5 text-xs font-semibold text-cobalt">
                  <Award className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{vasoChain.recognitionBadge}</span>
                </span>
              </div>
            )}

            <h3 className="type-h2 mt-4 font-display font-semibold text-ink">
              <Link
                href={`/proyectos/${vasoChain.slug}`}
                className="transition-colors hover:text-cobalt"
              >
                {vasoChain.name}
              </Link>
            </h3>

            <p className="type-body mt-4 text-mutedLight">{vasoChain.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {vasoChain.previewTags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-ivory px-3 py-1 text-xs font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ProjectLinks project={vasoChain} />
          </div>
        </article>
      )}

      {/* BLOQUE 2: DOS PROYECTOS DESTACADOS CON COMPOSICIONES DISTINTAS (MineSafe 3D & YAKU ALERT) */}
      {(mineSafe || yakuAlert) && (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {mineSafe && (
            <article className="group flex min-w-0 flex-col justify-between rounded-2xl bg-carbon p-5 text-white shadow-editorialDark sm:p-8 lg:col-span-7">
              <div>
                <ProjectCover project={mineSafe} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-cobalt">
                    {mineSafe.indexLabel}
                  </span>
                  <span className="h-px w-5 bg-ruleDark" aria-hidden="true" />
                  <span className="text-xs text-mutedDark">{mineSafe.editorialSubtitle}</span>
                </div>
                <h3 className="type-h3 mt-3 font-display font-semibold text-white">
                  <Link
                    href={`/proyectos/${mineSafe.slug}`}
                    className="transition-colors hover:text-cobalt"
                  >
                    {mineSafe.name}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mutedDark sm:text-base">
                  {mineSafe.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {mineSafe.previewTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.07] px-2.5 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-ruleDark pt-5">
                <Link
                  href={`/proyectos/${mineSafe.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-cobalt"
                >
                  <span>Ver caso de estudio</span>
                  <ArrowUpRight className="h-4 w-4 text-cobalt" aria-hidden="true" />
                </Link>
                <a
                  href={mineSafe.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-mutedDark transition-colors hover:text-white"
                >
                  <GitBranch className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  <span>Repositorio</span>
                </a>
              </div>
            </article>
          )}

          {yakuAlert && (
            <article className="group flex min-w-0 flex-col justify-between rounded-2xl bg-white p-5 shadow-editorialLight sm:p-8 lg:col-span-5">
              <div>
                <ProjectCover project={yakuAlert} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-cobalt">
                    {yakuAlert.indexLabel}
                  </span>
                  <span className="h-px w-5 bg-ruleLight" aria-hidden="true" />
                  <span className="text-xs text-mutedLight">{yakuAlert.editorialSubtitle}</span>
                </div>
                <h3 className="type-h3 mt-3 font-display font-semibold text-ink">
                  <Link
                    href={`/proyectos/${yakuAlert.slug}`}
                    className="transition-colors hover:text-cobalt"
                  >
                    {yakuAlert.name}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mutedLight sm:text-base">
                  {yakuAlert.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {yakuAlert.previewTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ProjectLinks project={yakuAlert} />
            </article>
          )}
        </div>
      )}

      {/* BLOQUE 3: INTERFAZ REAL DE PRODUCTO EN ANCHO COMPLETO (Establo AI Leads) */}
      {establo && (
        <article className="group grid items-center gap-8 rounded-2xl bg-white p-5 shadow-editorialLight sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="min-w-0 lg:order-2 lg:col-span-7">
            <ProjectCover project={establo} />
          </div>
          <div className="min-w-0 lg:order-1 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-cobalt">
                {establo.indexLabel}
              </span>
              <span className="h-px w-6 bg-ruleLight" aria-hidden="true" />
              <span className="text-xs text-mutedLight">{establo.editorialSubtitle}</span>
            </div>

            <h3 className="type-h3 mt-4 font-display font-semibold text-ink">
              <Link
                href={`/proyectos/${establo.slug}`}
                className="transition-colors hover:text-cobalt"
              >
                {establo.name}
              </Link>
            </h3>

            <p className="type-body mt-3 text-mutedLight">{establo.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {establo.previewTags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ProjectLinks project={establo} />
          </div>
        </article>
      )}

      {/* BLOQUE 4: DOS COLUMNAS REFINADAS (Caso16 & Egresados System) */}
      {remaining.length > 0 && (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {remaining.map((project) => (
            <article
              key={project.slug}
              className="group flex min-w-0 flex-col justify-between rounded-2xl bg-white p-5 shadow-editorialLight sm:p-8"
            >
              <div>
                <ProjectCover project={project} />
                <div className="mt-6 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-cobalt">
                    {project.indexLabel}
                  </span>
                  <span className="h-px w-5 bg-ruleLight" aria-hidden="true" />
                  <span className="text-xs text-mutedLight">{project.editorialSubtitle}</span>
                </div>
                <h3 className="type-h3 mt-3 font-display font-semibold text-ink">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="transition-colors hover:text-cobalt"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mutedLight sm:text-base">
                  {project.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.previewTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
