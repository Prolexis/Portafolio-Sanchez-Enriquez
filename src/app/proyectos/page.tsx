import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { flagshipProjects, secondaryProjects } from '@/data/projects';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Estudio',
  description: `Catálogo editorial de ${flagshipProjects.length} casos de estudio principales y ${secondaryProjects.length} repositorios complementarios de ${profile.fullName}.`,
  alternates: {
    canonical: '/proyectos',
  },
};

export default function ProyectosPage() {
  return (
    <div className="bg-ivory text-ink">
      <div className="bg-carbon py-14 text-white sm:py-16">
        <div className="atelier-container">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-soft">
            Archivo de ingeniería · github.com/{profile.handle}
          </p>
          <h1 className="atelier-section-title mt-3 font-display font-semibold text-white">
            Proyectos seleccionados.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-editorial-muted">
            Soluciones de software, inteligencia artificial, analítica SQL y ciberseguridad con
            código abierto y evidencia verificable.
          </p>
        </div>
      </div>

      <div className="atelier-container py-12 sm:py-16">
        <ProjectsExplorer />
      </div>
    </div>
  );
}
