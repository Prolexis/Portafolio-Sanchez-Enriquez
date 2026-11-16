import { BrainCircuit, Code2, Database, Server } from 'lucide-react';
import { techGroups, type TechCategoryIconKey } from '@/data/skills';

const iconMap: Record<TechCategoryIconKey, typeof Code2> = {
  code: Code2,
  server: Server,
  brain: BrainCircuit,
  database: Database,
};

export function TechStackGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {techGroups.map((group) => {
        const Icon = iconMap[group.iconKey];

        return (
          <div
            key={group.id}
            className="flex flex-col justify-between rounded-xl border border-editorial-borderLight bg-ivory/60 p-6 transition-colors duration-200 hover:border-ink/25"
          >
            <div>
              <div className="flex items-center gap-2.5 border-b border-editorial-borderLight pb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-cobalt shadow-sm ring-1 ring-editorial-borderLight">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-editorial-borderLight bg-white px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
