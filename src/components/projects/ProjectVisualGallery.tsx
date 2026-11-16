'use client';

import { useState } from 'react';
import { Expand } from 'lucide-react';
import type { ProjectVisual } from '@/data/projects';
import { DocumentModal } from '@/components/ui/DocumentModal';

interface ProjectVisualGalleryProps {
  projectName: string;
  visuals: ProjectVisual[];
}

export function ProjectVisualGallery({
  projectName,
  visuals,
}: ProjectVisualGalleryProps) {
  const [activeVisual, setActiveVisual] = useState<ProjectVisual | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {visuals.map((visual) => (
          <figure
            key={visual.src}
            className="overflow-hidden rounded-xl bg-white p-3 shadow-editorialLight sm:p-4"
          >
            <button
              type="button"
              onClick={() => setActiveVisual(visual)}
              aria-label={`Ampliar captura: ${visual.caption}`}
              className="group relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg bg-ivory"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={visual.src}
                alt={visual.alt}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
              />
              <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded bg-carbon/90 px-2.5 py-1 font-mono text-[11px] font-medium text-white">
                <Expand className="h-3 w-3 text-cobalt" aria-hidden="true" />
                <span>Ampliar</span>
              </span>
            </button>
            <figcaption className="mt-3 px-1 text-xs leading-relaxed text-mutedLight">
              {visual.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {activeVisual && (
        <DocumentModal
          isOpen={true}
          onClose={() => setActiveVisual(null)}
          title={projectName}
          subtitle="Evidencia visual del repositorio"
          integrityNote={activeVisual.caption}
          imagePath={activeVisual.src}
          imageAlt={activeVisual.alt}
        />
      )}
    </>
  );
}
