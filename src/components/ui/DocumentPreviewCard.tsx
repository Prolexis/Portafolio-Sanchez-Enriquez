'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, Eye, FileCheck2 } from 'lucide-react';
import type { AchievementItem } from '@/data/achievements';
import { DocumentModal } from '@/components/ui/DocumentModal';
import { cn } from '@/lib/utils';

interface DocumentPreviewCardProps {
  achievement: AchievementItem;
  horizontal?: boolean;
  ctaText?: string;
}

export function DocumentPreviewCard({
  achievement,
  horizontal = false,
  ctaText = 'Ampliar documento',
}: DocumentPreviewCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article
        className={cn(
          'overflow-hidden rounded-2xl border border-white/10 bg-carbon p-6 transition-colors hover:border-white/20 sm:p-8',
          horizontal && 'grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12'
        )}
      >
        {achievement.imagePath && achievement.imageAlt && (
          <div className={cn(horizontal ? 'lg:col-span-6' : 'mb-5')}>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label={`Ampliar documento: ${achievement.title}`}
              className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-obsidian p-3 text-left transition-colors hover:border-cobalt/60"
            >
              {/* Proporción íntegra con object-contain: nunca recorta firmas ni sellos */}
              <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg bg-[#07090D]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={achievement.imagePath}
                  alt={achievement.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-2 px-1 text-xs text-editorial-muted">
                <span className="inline-flex items-center gap-1.5 text-cobalt-soft">
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Documento íntegro · Sin recortes</span>
                </span>
                <span className="transition-colors group-hover:text-white">
                  Ampliar visor →
                </span>
              </div>
            </button>
          </div>
        )}

        <div className={cn(horizontal && achievement.imagePath ? 'lg:col-span-6' : '')}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-cobalt/15 px-3 py-1 font-mono text-xs font-medium text-cobalt-soft ring-1 ring-cobalt/30">
              {achievement.type === 'Reconocimiento académico' ? (
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{achievement.shortBadge}</span>
            </span>
            <span className="font-mono text-xs text-editorial-muted">{achievement.dateLabel}</span>
          </div>

          <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
            {achievement.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-editorial-muted sm:text-base">
            {achievement.summary}
          </p>

          <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-editorial-muted">
            <div>
              <dt className="inline font-semibold text-white">Emitido por: </dt>
              <dd className="inline">{achievement.issuer}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-white">Periodo: </dt>
              <dd className="inline">{achievement.periodLabel}</dd>
            </div>
            {achievement.signers.length > 0 && (
              <div>
                <dt className="inline font-semibold text-white">Firmas visibles: </dt>
                <dd className="inline">{achievement.signers.join(' · ')}</dd>
              </div>
            )}
          </dl>

          <p className="mt-3 text-xs leading-relaxed text-editorial-muted/85">
            {achievement.integrityNote}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {achievement.imagePath && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span>{ctaText}</span>
              </button>
            )}
            {achievement.relatedProjectSlug && (
              <Link
                href={`/proyectos/${achievement.relatedProjectSlug}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/35"
              >
                <span>Ver proyecto asociado</span>
                <ArrowUpRight className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </article>

      {achievement.imagePath && achievement.imageAlt && (
        <DocumentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={achievement.title}
          subtitle={achievement.type}
          issuer={achievement.issuer}
          dateLabel={achievement.dateLabel}
          signers={achievement.signers}
          integrityNote={achievement.integrityNote}
          imagePath={achievement.imagePath}
          imageAlt={achievement.imageAlt}
        />
      )}
    </>
  );
}
