import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      data-header-theme="dark"
      className="signature-container flex max-w-3xl flex-col items-start py-24 text-white"
    >
      <span className="inline-flex items-center gap-2 rounded bg-cobalt/20 px-3 py-1 font-mono text-xs text-cobalt">
        <Compass className="h-3.5 w-3.5" aria-hidden="true" />
        <span>404 · Ruta no encontrada</span>
      </span>

      <h1 className="type-h1 mt-5 font-display font-semibold text-white">
        Esta página no existe o fue movida.
      </h1>

      <p className="type-body mt-3 text-mutedDark">
        Puedes volver al inicio del portafolio o explorar directamente los casos de estudio.
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
          className="inline-flex items-center gap-2 rounded-md border border-ruleDark px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
        >
          <span>Ver proyectos</span>
        </Link>
      </div>
    </section>
  );
}
