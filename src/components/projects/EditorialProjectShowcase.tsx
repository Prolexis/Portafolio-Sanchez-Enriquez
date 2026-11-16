import Link from 'next/link';
import { ArrowUpRight, Award, ExternalLink, GitBranch } from 'lucide-react';
import type { FlagshipProject } from '@/data/projects';
import { ProjectArchitectureDiagram } from '@/components/projects/ProjectArchitectureDiagram';
import { cn } from '@/lib/utils';

interface EditorialProjectShowcaseProps {
  projects: FlagshipProject[];
}

function ProjectVisualFrame({
  project,
  protagonist = false,
}: {
  project: FlagshipProject;
  protagonist?: boolean;
}) {
  const leadVisual = project.visuals[0];

  if (leadVisual) {
    return (
      <div
        className={cn(
          'obsidian-surface overflow-hidden rounded-xl p-3 sm:p-4',
          protagonist && 'bg-bg-elevated'
        )}
      >
        <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-[#07090D]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={leadVisual.src}
            alt={leadVisual.alt}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 px-1">
          <p className="truncate font-mono text-[11px] text-text-muted">
            {leadVisual.caption}
          </p>
        </div>
      </div>
    );
  }

  if (project.architectureKind) {
    return (
      <div className="obsidian-surface overflow-hidden rounded-xl p-2 sm:p-3">
        <ProjectArchitectureDiagram kind={project.architectureKind} compact={!protagonist} />
      </div>
    );
  }

  return null;
}

export function EditorialProjectShowcase({ projects }: EditorialProjectShowcaseProps) {
  return (
    <div className="space-y-12 lg:space-y-16">
      {projects.map((project, idx) => {
        const isProtagonist = idx < 2;
        const flipVisualRight = idx % 2 === 0;

        return (
          <article
            key={project.slug}
            className={cn(
              'group border-t border-border-subtle pt-10 lg:pt-14',
              idx === 0 && 'border-t-0 pt-0'
            )}
          >
            <div
              className={cn(
                'grid items-center gap-8 lg:grid-cols-12 lg:gap-12',
                isProtagonist && 'rounded-2xl border border-border-subtle bg-bg-elevated/60 p-5 sm:p-8 lg:p-10'
              )}
            >
              {/* Columna visual */}
              <div
                className={cn(
                  isProtagonist ? 'lg:col-span-7' : 'lg:col-span-6',
                  flipVisualRight ? 'lg:order-2' : 'lg:order-1'
                )}
              >
                <ProjectVisualFrame project={project} protagonist={isProtagonist} />
              </div>

              {/* Columna editorial */}
              <div
                className={cn(
                  'flex flex-col justify-center',
                  isProtagonist ? 'lg:col-span-5' : 'lg:col-span-6',
                  flipVisualRight ? 'lg:order-1' : 'lg:order-2'
                )}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-medium tracking-wider text-accent">
                    {project.indexLabel}
                  </span>
                  <span className="h-px w-6 bg-border-strong" aria-hidden="true" />
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {project.recognitionBadge && (
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Award className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{project.recognitionBadge}</span>
                    </span>
                  </div>
                )}

                <h3
                  className={cn(
                    'mt-4 font-display font-semibold tracking-tight text-text-primary',
                    isProtagonist ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                  )}
                >
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {project.name}
                  </Link>
                </h3>

                <p className="mt-2 font-mono text-xs text-text-muted">
                  {project.editorialSubtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {project.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.confirmedStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border-subtle bg-bg px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border-subtle pt-5">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent"
                  >
                    <span>Explorar caso de estudio</span>
                    <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                  </Link>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <GitBranch className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <span>Repositorio</span>
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent transition-colors hover:text-accent-hover"
                    >
                      <span>Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
