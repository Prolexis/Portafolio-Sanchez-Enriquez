import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { flagshipProjects, secondaryProjects } from '@/data/projects';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Estudio',
  description: `Catálogo técnico de ${flagshipProjects.length} casos de estudio principales y ${secondaryProjects.length} repositorios complementarios de ${profile.brandLabel}.`,
  alternates: {
    canonical: '/proyectos',
  },
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Catálogo técnico · /{profile.handle}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          Proyectos y casos de estudio
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">
          Selección de sistemas en ingeniería web, inteligencia artificial aplicada, seguridad en
          Active Directory, analítica sobre SQL Server y prototipos de hackathon. Cada ficha distingue
          claramente el entorno de prueba, las tecnologías verificadas y los repositorios en GitHub.
        </p>
      </header>

      <div className="mt-10">
        <ProjectsExplorer />
      </div>
    </div>
  );
}
