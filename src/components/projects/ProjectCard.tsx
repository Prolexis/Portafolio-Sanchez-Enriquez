import Link from 'next/link';
import { ArrowUpRight, Award, ExternalLink, GitBranch } from 'lucide-react';
import type { FlagshipProject } from '@/data/projects';
import { ProjectArchitectureDiagram } from '@/components/projects/ProjectArchitectureDiagram';

interface ProjectCardProps {
  project: FlagshipProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const leadVisual = project.visuals[0];
  const visibleStack = project.confirmedStack.slice(0, 5);
  const remainingStack = project.confirmedStack.length - visibleStack.length;

  return (
    <article className="surface-card surface-card-hover flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="border-b border-border-subtle bg-[#070A10] p-3">
        {leadVisual ? (
          <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-lg border border-border-subtle bg-[#05070C]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={leadVisual.src}
              alt={leadVisual.alt}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        ) : project.architectureKind ? (
          <ProjectArchitectureDiagram kind={project.architectureKind} compact />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-md border border-border-subtle bg-bg-subtle px-2 py-0.5 font-mono text-[11px] text-text-secondary"
              >
                {category}
              </span>
            ))}
          </div>
          <span className="font-mono text-xs text-text-muted">{project.year}</span>
        </div>

        {project.recognitionBadge && (
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              <Award className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{project.recognitionBadge}</span>
            </span>
          </div>
        )}

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-text-primary">
          <Link
            href={`/proyectos/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.tagline}</p>

        <p className="mt-3 text-xs leading-relaxed text-text-muted">{project.status}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-subtle bg-bg px-2 py-1 text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {remainingStack > 0 && (
            <span className="rounded-md border border-border-subtle bg-bg px-2 py-1 font-mono text-xs text-text-muted">
              +{remainingStack}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border-subtle pt-4 text-sm">
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent-hover"
          >
            <span>Ver caso de estudio</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="ml-auto flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-text-primary transition-colors hover:text-accent"
              >
                <span>Demo</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio GitHub de ${project.name}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
