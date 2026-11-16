import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, Code2, Layers } from 'lucide-react';
import { profile } from '@/data/profile';

const areaIcons = [Code2, BrainCircuit, Layers];

export function FocusAreasSection() {
  return (
    <div className="divide-y divide-ruleLight border-y border-ruleLight">
      {profile.focusAreas.map((area, index) => {
        const Icon = areaIcons[index] ?? Code2;

        return (
          <div
            key={area.number}
            className="grid gap-6 py-9 lg:grid-cols-12 lg:items-start lg:gap-10"
          >
            <div className="flex items-center gap-3 lg:col-span-4">
              <span className="font-mono text-sm font-semibold text-cobalt">
                {area.number}
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ivory text-ink">
                <Icon className="h-4 w-4 text-cobalt" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {area.title}
              </h3>
            </div>

            <div className="lg:col-span-5">
              <p className="type-body text-mutedLight">{area.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-ivory px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 lg:col-span-3 lg:items-end">
              <span className="font-mono text-[11px] uppercase tracking-wider text-mutedLight">
                Relacionados
              </span>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {area.projects.map((proj) => (
                  <Link
                    key={proj.slug}
                    href={`/proyectos/${proj.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-cobalt"
                  >
                    <span>{proj.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
