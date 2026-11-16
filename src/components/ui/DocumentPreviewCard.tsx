'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, Eye, FileCheck2 } from 'lucide-react';
import type { AchievementItem } from '@/data/achievements';
import { DocumentModal } from '@/components/ui/DocumentModal';
import { cn } from '@/lib/utils';

interface DocumentPreviewCardProps {
  achievement: AchievementItem;
  variant?: 'featured' | 'secondary';
  ctaText?: string;
}

export function DocumentPreviewCard({
  achievement,
  variant = 'featured',
  ctaText = 'Ampliar reconocimiento',
}: DocumentPreviewCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  if (variant === 'secondary') {
    return (
      <>
        <article className="grid items-center gap-6 rounded-2xl border border-ruleDark bg-[#141922] p-6 sm:p-7 lg:grid-cols-12">
          {achievement.imagePath && achievement.imageAlt && (
            <div className="lg:col-span-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label={`Ampliar constancia: ${achievement.title}`}
                className="group relative block w-full overflow-hidden rounded-lg bg-[#0A0D12] p-2 text-left"
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={achievement.imagePath}
                    alt={achievement.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </button>
            </div>
          )}

          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-cobalt">
                <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{achievement.shortBadge}</span>
              </span>
              <span className="font-mono text-xs text-mutedDark">{achievement.dateLabel}</span>
            </div>

            <h3 className="mt-2 font-display text-xl font-semibold text-white">
              {achievement.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-mutedDark">
              {achievement.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              {achievement.imagePath && (
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-cobalt"
                >
                  <Eye className="h-4 w-4 text-cobalt" aria-hidden="true" />
                  <span>{ctaText}</span>
                </button>
              )}
              {achievement.relatedProjectSlug && (
                <Link
                  href={`/proyectos/${achievement.relatedProjectSlug}`}
                  className="inline-flex items-center gap-1 text-xs text-mutedDark transition-colors hover:text-white"
                >
                  <span>Proyecto relacionado</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
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

  return (
    <>
      <article className="grid items-center gap-8 rounded-2xl border border-ruleDark bg-[#141922] p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
        {achievement.imagePath && achievement.imageAlt && (
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              aria-label={`Ampliar documento: ${achievement.title}`}
              className="group relative block w-full overflow-hidden rounded-xl bg-[#0A0D12] p-3 text-left transition-colors"
            >
              {/* object-contain conserva firmas y sellos completos sin recorte */}
              <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={achievement.imagePath}
                  alt={achievement.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-2 px-1 text-xs text-mutedDark">
                <span className="inline-flex items-center gap-1.5 text-cobalt">
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ver documento ampliado</span>
                </span>
                <span className="transition-colors group-hover:text-white">Abrir visor →</span>
              </div>
            </button>
          </div>
        )}

        <div className={cn(achievement.imagePath ? 'lg:col-span-6' : 'lg:col-span-12')}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded bg-cobalt/15 px-3 py-1 font-mono text-xs font-medium text-cobalt">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{achievement.shortBadge}</span>
            </span>
            <span className="font-mono text-xs text-mutedDark">{achievement.dateLabel}</span>
          </div>

          <h3 className="type-h3 mt-4 font-display font-semibold text-white">
            {achievement.title}
          </h3>

          <p className="type-body mt-3 text-mutedDark">{achievement.summary}</p>

          <dl className="mt-5 space-y-2 border-t border-ruleDark pt-4 text-xs text-mutedDark">
            <div>
              <dt className="inline font-semibold text-white">Institución: </dt>
              <dd className="inline">{achievement.issuer}</dd>
            </div>
            {achievement.signers.length > 0 && (
              <div>
                <dt className="inline font-semibold text-white">Autoridades firmantes: </dt>
                <dd className="inline">{achievement.signers.join(' · ')}</dd>
              </div>
            )}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {achievement.imagePath && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                <span>{ctaText}</span>
              </button>
            )}
            {achievement.relatedProjectSlug && (
              <Link
                href={`/proyectos/${achievement.relatedProjectSlug}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-ruleDark px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/35"
              >
                <span>Ver caso VasoChainAI</span>
                <ArrowUpRight className="h-4 w-4 text-cobalt" aria-hidden="true" />
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
