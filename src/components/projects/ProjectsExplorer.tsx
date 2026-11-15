'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, GitBranch, Search } from 'lucide-react';
import {
  flagshipProjects,
  projectFilterCategories,
  secondaryProjects,
  type ProjectCategory,
} from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { cn } from '@/lib/utils';

export function ProjectsExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ProjectCategory>('Todos');
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const filteredFlagships = useMemo(() => {
    return flagshipProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' || project.categories.includes(selectedCategory);
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        project.name,
        project.tagline,
        project.status,
        ...project.confirmedStack,
        ...project.categories,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [selectedCategory, normalizedQuery]);

  const filteredSecondary = useMemo(() => {
    return secondaryProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'Todos' || project.categories.includes(selectedCategory);
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        project.name,
        project.summary,
        project.status,
        ...project.stack,
        ...project.categories,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [selectedCategory, normalizedQuery]);

  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-bg-elevated p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div
          role="group"
          aria-label="Filtrar proyectos por categoría"
          className="flex flex-wrap gap-2"
        >
          {projectFilterCategories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={cn(
                  'rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-accent text-[#060911]'
                    : 'border border-border-subtle bg-bg-card text-text-secondary hover:border-border-strong hover:text-text-primary'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-72">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar por stack o tema (ej. FastAPI, SQL)"
            aria-label="Buscar proyectos por tecnología o descripción"
            className="w-full rounded-lg border border-border-strong bg-bg py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent"
          />
        </div>
      </div>

      <section aria-labelledby="flagships-heading">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2
              id="flagships-heading"
              className="font-display text-2xl font-semibold text-text-primary"
            >
              Casos de estudio principales
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Proyectos insignia con documentación técnica, arquitectura y alcance verificable.
            </p>
          </div>
          <span className="font-mono text-xs text-text-muted">
            {filteredFlagships.length} de {flagshipProjects.length}
          </span>
        </div>

        {filteredFlagships.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredFlagships.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border-subtle bg-bg-elevated p-8 text-center">
            <p className="text-sm text-text-secondary">
              Ningún proyecto principal coincide con el filtro actual.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Todos');
                setQuery('');
              }}
              className="mt-3 text-sm font-medium text-accent hover:text-accent-hover"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </section>

      <section aria-labelledby="secondary-heading" className="border-t border-border-subtle pt-12">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2
              id="secondary-heading"
              className="font-display text-2xl font-semibold text-text-primary"
            >
              Repositorios complementarios
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Aplicaciones web, utilidades de visión por computador, NLP e ingeniería en GitHub.
            </p>
          </div>
          <span className="font-mono text-xs text-text-muted">
            {filteredSecondary.length} de {secondaryProjects.length}
          </span>
        </div>

        {filteredSecondary.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSecondary.map((project) => (
              <article
                key={project.slug}
                className="surface-card surface-card-hover flex flex-col rounded-xl p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded border border-border-subtle bg-bg-subtle px-2 py-0.5 font-mono text-[11px] text-text-secondary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-text-muted">{project.status}</span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border-subtle bg-bg px-2 py-0.5 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4 border-t border-border-subtle pt-3.5 text-xs">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    <GitBranch className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <span>Ver en GitHub</span>
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      <span>Abrir demo</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-border-subtle bg-bg-elevated p-6 text-sm text-text-secondary">
            Sin repositorios complementarios para este filtro.
          </p>
        )}
      </section>
    </div>
  );
}
