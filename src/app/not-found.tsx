import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
        <Compass className="h-3.5 w-3.5" aria-hidden="true" />
        <span>404 · Ruta no encontrada</span>
      </span>

      <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        Esta página no existe o fue movida.
      </h1>

      <p className="mt-3 text-base leading-relaxed text-text-secondary">
        Puedes volver al inicio del portafolio o explorar directamente el catálogo completo de
        proyectos y casos de estudio.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-[#060911] transition-colors hover:bg-accent-hover"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Volver al inicio</span>
        </Link>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-bg-card px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
        >
          <span>Explorar proyectos</span>
        </Link>
      </div>
    </section>
  );
}
