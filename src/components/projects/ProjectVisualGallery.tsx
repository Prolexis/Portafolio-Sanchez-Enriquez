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
      <div className="grid gap-5 md:grid-cols-2">
        {visuals.map((visual) => (
          <figure
            key={visual.src}
            className="surface-card overflow-hidden rounded-2xl p-3 sm:p-4"
          >
            <button
              type="button"
              onClick={() => setActiveVisual(visual)}
              aria-label={`Ampliar captura: ${visual.caption}`}
              className="group relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-border-subtle bg-[#05070C]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={visual.src}
                alt={visual.alt}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
              />
              <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-md border border-border-strong bg-bg/85 px-2 py-1 text-[11px] font-medium text-text-primary opacity-90 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Expand className="h-3 w-3 text-accent" aria-hidden="true" />
                <span>Ampliar</span>
              </span>
            </button>
            <figcaption className="mt-3 px-1 text-xs leading-relaxed text-text-secondary">
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
