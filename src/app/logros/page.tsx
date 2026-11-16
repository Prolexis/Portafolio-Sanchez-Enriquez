import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Award } from 'lucide-react';
import { achievements } from '@/data/achievements';
import { profile } from '@/data/profile';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';

export const metadata: Metadata = {
  title: 'Logros y Reconocimientos',
  description: `Aprendizaje, retos y reconocimientos verificados de ${profile.fullName}.`,
  alternates: {
    canonical: '/logros',
  },
};

export default function LogrosPage() {
  const syscoinRecognition = achievements.find((a) => a.id === 'syscoin-unt-2026');
  const sqlConstancia = achievements.find((a) => a.id === 'sql-server-2025');
  const participationItems = achievements.filter((item) => !item.imagePath);

  return (
    <div data-header-theme="dark" className="bg-carbon py-14 text-white sm:py-20">
      <div className="signature-container">
        <header className="max-w-3xl border-b border-ruleDark pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cobalt">
            Trayectoria y formación
          </p>
          <h1 className="type-h1 mt-3 font-display font-semibold text-white">
            El trabajo también deja huella.
          </h1>
          <p className="type-body-lg mt-4 text-mutedDark">
            Aprendizaje, retos y reconocimientos que forman parte de mi trayectoria.
          </p>
        </header>

        <section aria-labelledby="featured-award-heading" className="mt-12 space-y-8">
          <h2 id="featured-award-heading" className="sr-only">
            Reconocimiento nacional protagonista
          </h2>

          {syscoinRecognition && (
            <DocumentPreviewCard
              achievement={syscoinRecognition}
              variant="featured"
              ctaText="Ampliar reconocimiento"
            />
          )}

          {sqlConstancia && (
            <div className="pt-4">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-mutedDark">
                Formación complementaria
              </p>
              <DocumentPreviewCard
                achievement={sqlConstancia}
                variant="secondary"
                ctaText="Ver constancia"
              />
            </div>
          )}
        </section>

        {participationItems.length > 0 && (
          <section
            aria-labelledby="hackathons-heading"
            className="mt-14 border-t border-ruleDark pt-12"
          >
            <h2
              id="hackathons-heading"
              className="font-display text-2xl font-semibold text-white"
            >
              Participaciones en hackathons
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {participationItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-ruleDark bg-[#141922] p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-cobalt">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{item.shortBadge}</span>
                    </span>
                    <span className="font-mono text-xs text-mutedDark">{item.dateLabel}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-mutedDark">
                    {item.summary}
                  </p>

                  {item.relatedProjectSlug && (
                    <div className="mt-5">
                      <Link
                        href={`/proyectos/${item.relatedProjectSlug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-cobalt"
                      >
                        <span>Ver caso de estudio asociado</span>
                        <ArrowUpRight className="h-4 w-4 text-cobalt" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
