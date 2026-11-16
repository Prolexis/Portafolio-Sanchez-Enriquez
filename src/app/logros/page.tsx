import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { achievements } from '@/data/achievements';
import { profile } from '@/data/profile';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';

export const metadata: Metadata = {
  title: 'Logros y Reconocimientos',
  description: `Reconocimientos institucionales, hackathons y constancias verificadas de ${profile.fullName}.`,
  alternates: {
    canonical: '/logros',
  },
};

export default function LogrosPage() {
  const documentedItems = achievements.filter((item) => item.imagePath);
  const participationItems = achievements.filter((item) => !item.imagePath);

  return (
    <div className="bg-obsidian py-14 text-white sm:py-20">
      <div className="atelier-container">
        <header className="max-w-3xl border-b border-white/10 pb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-soft">
            Evidencia documental · UNT y formación complementaria
          </p>
          <h1 className="atelier-section-title mt-3 font-display font-semibold text-white">
            Más allá del código.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-editorial-muted">
            Reconocimientos y constancias emitidas que respaldan mi desarrollo profesional, exhibidos
            en su formato original sin recortar firmas ni sellos institucionales.
          </p>
        </header>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-carbon p-4 text-xs text-editorial-muted sm:text-sm">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cobalt-soft" aria-hidden="true" />
          <p className="leading-relaxed">
            Haz clic en cualquier documento para abrir el visor ampliado con zoom, vista en pestaña
            nueva y descarga del archivo original.
          </p>
        </div>

        <section aria-labelledby="documented-heading" className="mt-10 space-y-8">
          <h2
            id="documented-heading"
            className="font-display text-2xl font-semibold text-white"
          >
            Documentos oficiales respaldados
          </h2>

          <div className="space-y-8">
            {documentedItems.map((achievement) => (
              <DocumentPreviewCard
                key={achievement.id}
                achievement={achievement}
                horizontal
                ctaText="Ver documento completo"
              />
            ))}
          </div>
        </section>

        {participationItems.length > 0 && (
          <section
            aria-labelledby="hackathons-heading"
            className="mt-14 border-t border-white/10 pt-12"
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
                  className="rounded-xl border border-white/10 bg-carbon p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-cobalt/15 px-3 py-1 font-mono text-xs text-cobalt-soft ring-1 ring-cobalt/30">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{item.shortBadge}</span>
                    </span>
                    <span className="font-mono text-xs text-editorial-muted">
                      {item.dateLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-editorial-muted">
                    {item.summary}
                  </p>

                  <p className="mt-3 text-xs text-editorial-muted">
                    <strong className="text-white">Contexto:</strong> {item.issuer}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-editorial-muted/85">
                    {item.integrityNote}
                  </p>

                  {item.relatedProjectSlug && (
                    <div className="mt-5">
                      <Link
                        href={`/proyectos/${item.relatedProjectSlug}`}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/35"
                      >
                        <span>Ver caso de estudio asociado</span>
                        <ArrowUpRight className="h-4 w-4 text-cobalt-soft" aria-hidden="true" />
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
