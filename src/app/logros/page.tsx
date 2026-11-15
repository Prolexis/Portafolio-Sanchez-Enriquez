import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { achievements } from '@/data/achievements';
import { profile } from '@/data/profile';
import { DocumentPreviewCard } from '@/components/ui/DocumentPreviewCard';

export const metadata: Metadata = {
  title: 'Logros, Hackathons y Formación',
  description: `Reconocimientos académicos, hackathons y constancias documentadas de ${profile.fullName}.`,
  alternates: {
    canonical: '/logros',
  },
};

export default function LogrosPage() {
  const documentedItems = achievements.filter((item) => item.imagePath);
  const participationItems = achievements.filter((item) => !item.imagePath);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Evidencia documentada · UNT y formación complementaria
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Logros, hackathons y constancias
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">
          Cada documento mostrado corresponde a su imagen original o constancia emitida,
          indicando con exactitud la entidad emisora, las fechas y el alcance real del premio o
          capacitación.
        </p>
      </header>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/25 bg-accent/10 p-4 text-xs text-text-secondary sm:text-sm">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        <p className="leading-relaxed">
          Haz clic en cualquier documento para abrir el visor ampliable (con zoom, apertura en
          pestaña nueva y descarga del archivo original) y verificar firmas y sellos sin recortes.
        </p>
      </div>

      <section aria-labelledby="documented-heading" className="mt-10 space-y-6">
        <h2
          id="documented-heading"
          className="font-display text-2xl font-semibold text-text-primary"
        >
          Documentos respaldados con archivo original
        </h2>

        <div className="space-y-6">
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
          className="mt-14 border-t border-border-subtle pt-12"
        >
          <h2
            id="hackathons-heading"
            className="font-display text-2xl font-semibold text-text-primary"
          >
            Otras participaciones en hackathons
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {participationItems.map((item) => (
              <article key={item.id} className="surface-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{item.shortBadge}</span>
                  </span>
                  <span className="text-xs text-text-muted">{item.dateLabel}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.summary}</p>

                <p className="mt-3 text-xs text-text-muted">
                  <strong className="text-text-primary">Contexto:</strong> {item.issuer}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  {item.integrityNote}
                </p>

                {item.relatedProjectSlug && (
                  <div className="mt-5">
                    <Link
                      href={`/proyectos/${item.relatedProjectSlug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
                    >
                      <span>Ver caso de estudio asociado</span>
                      <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
