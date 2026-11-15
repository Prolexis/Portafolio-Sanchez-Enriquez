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
          'surface-card surface-card-hover overflow-hidden rounded-2xl p-5 sm:p-6',
          horizontal && 'grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8'
        )}
      >
        {achievement.imagePath && achievement.imageAlt && (
          <div className={cn(horizontal ? 'lg:col-span-5' : 'mb-5')}>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label={`Ampliar documento: ${achievement.title}`}
              className="group relative block w-full overflow-hidden rounded-xl border border-border-subtle bg-[#070A10] p-2.5 text-left transition-colors hover:border-accent/45"
            >
              {/* Contenedor vertical fijo con object-contain: nunca recorta firmas ni sellos */}
              <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg bg-[#05070C]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={achievement.imagePath}
                  alt={achievement.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between gap-2 px-1 text-xs text-text-secondary">
                <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Documento íntegro visible</span>
                </span>
                <span className="text-text-muted group-hover:text-text-primary">
                  Clic para ampliar
                </span>
              </div>
            </button>
          </div>
        )}

        <div className={cn(horizontal && achievement.imagePath ? 'lg:col-span-7' : '')}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              {achievement.type === 'Reconocimiento académico' ? (
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{achievement.shortBadge}</span>
            </span>
            <span className="text-xs text-text-muted">{achievement.dateLabel}</span>
          </div>

          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-text-primary sm:text-xl">
            {achievement.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {achievement.summary}
          </p>

          <dl className="mt-4 space-y-1.5 border-t border-border-subtle pt-4 text-xs text-text-secondary">
            <div>
              <dt className="inline font-semibold text-text-primary">Emitido por: </dt>
              <dd className="inline">{achievement.issuer}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-text-primary">Periodo del certamen / taller: </dt>
              <dd className="inline">{achievement.periodLabel}</dd>
            </div>
            {achievement.signers.length > 0 && (
              <div>
                <dt className="inline font-semibold text-text-primary">Autoridades firmantes: </dt>
                <dd className="inline">{achievement.signers.join(' · ')}</dd>
              </div>
            )}
          </dl>

          <p className="mt-3 text-xs leading-relaxed text-text-muted">
            {achievement.integrityNote}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {achievement.imagePath && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#060911] transition-colors hover:bg-accent-hover"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span>{ctaText}</span>
              </button>
            )}
            {achievement.relatedProjectSlug && (
              <Link
                href={`/proyectos/${achievement.relatedProjectSlug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-subtle"
              >
                <span>Ver proyecto asociado</span>
                <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
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
