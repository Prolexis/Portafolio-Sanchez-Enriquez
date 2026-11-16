import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="atelier-container flex max-w-3xl flex-col items-start py-24">
      <span className="inline-flex items-center gap-2 rounded-md bg-cobalt/15 px-3 py-1 font-mono text-xs text-cobalt-soft ring-1 ring-cobalt/30">
        <Compass className="h-3.5 w-3.5" aria-hidden="true" />
        <span>404 · Ruta no encontrada</span>
      </span>

      <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Esta página no existe o fue movida.
      </h1>

      <p className="mt-3 text-base leading-relaxed text-editorial-muted">
        Puedes volver al inicio del portafolio o explorar directamente los casos de estudio
        seleccionados.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Volver al inicio</span>
        </Link>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
        >
          <span>Ver proyectos</span>
        </Link>
      </div>
    </section>
  );
}
