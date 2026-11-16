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
    <div data-header-theme="light" className="bg-ivory text-ink">
      <div className="border-b border-ruleLight py-14 sm:py-16">
        <div className="signature-container">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cobalt">
            Archivo de ingeniería · github.com/{profile.handle}
          </p>
          <h1 className="type-h1 mt-3 font-display font-semibold text-ink">
            Proyectos que hablan por sí mismos.
          </h1>
          <p className="type-body-lg mt-4 max-w-2xl text-mutedLight">
            Software, inteligencia artificial y datos aplicados a desafíos reales.
          </p>
        </div>
      </div>

      <div className="signature-container py-12 sm:py-16">
        <ProjectsExplorer />
      </div>
    </div>
  );
}
