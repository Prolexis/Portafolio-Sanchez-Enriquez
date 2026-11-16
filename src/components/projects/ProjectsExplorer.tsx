'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, GitBranch, Search } from 'lucide-react';
import {
  flagshipProjects,
  projectFilterCategories,
  secondaryProjects,
  type ProjectCategory,
} from '@/data/projects';
import { AtelierProjectShowcase } from '@/components/projects/AtelierProjectShowcase';
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
        project.editorialSubtitle,
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
    <div className="space-y-16">
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-editorialLight sm:flex-row sm:items-center sm:justify-between sm:p-5">
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
                  'rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-ink text-white'
                    : 'bg-ivory text-mutedLight hover:text-ink'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-72">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mutedLight"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar tecnología o tema..."
            aria-label="Buscar proyectos por tecnología o descripción"
            className="w-full rounded-md border border-ruleLight bg-ivory py-2 pl-9 pr-3 text-sm text-ink placeholder:text-mutedLight focus:border-cobalt"
          />
        </div>
      </div>

      <section aria-labelledby="flagships-heading">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2
              id="flagships-heading"
              className="font-display text-2xl font-semibold tracking-tight text-ink"
            >
              Proyectos destacados
            </h2>
            <p className="mt-1 text-sm text-mutedLight">
              Casos de estudio principales con evidencia de producto y enlaces al código.
            </p>
          </div>
          <span className="font-mono text-xs text-mutedLight">
            {filteredFlagships.length} / {flagshipProjects.length}
          </span>
        </div>

        {filteredFlagships.length > 0 ? (
          <AtelierProjectShowcase
            projects={filteredFlagships}
            uniform={selectedCategory !== 'Todos' || Boolean(normalizedQuery)}
          />
        ) : (
          <div className="rounded-xl bg-white p-10 text-center">
            <p className="text-sm text-mutedLight">
              Ningún proyecto principal coincide con el filtro actual.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Todos');
                setQuery('');
              }}
              className="mt-3 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </section>

      <section aria-labelledby="secondary-heading" className="border-t border-ruleLight pt-14">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h2
              id="secondary-heading"
              className="font-display text-2xl font-semibold tracking-tight text-ink"
            >
              Proyectos complementarios
            </h2>
            <p className="mt-1 text-sm text-mutedLight">
              Aplicaciones web, visión computacional y procesamiento documental en GitHub.
            </p>
          </div>
          <span className="font-mono text-xs text-mutedLight">
            {filteredSecondary.length} / {secondaryProjects.length}
          </span>
        </div>

        {filteredSecondary.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredSecondary.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-editorialLight transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt">
                      {project.categories[0]}
                    </span>
                    <span className="text-[11px] text-mutedLight">{project.status}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {project.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mutedLight">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-ivory px-2 py-0.5 text-xs text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-ruleLight pt-3.5 text-xs">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-cobalt"
                  >
                    <GitBranch className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 font-medium text-cobalt transition-colors hover:text-cobalt-hover"
                    >
                      <span>Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-white p-6 text-sm text-mutedLight">
            Sin repositorios complementarios para este filtro.
          </p>
        )}
      </section>
    </div>
  );
}
