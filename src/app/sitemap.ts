import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { flagshipProjects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/proyectos', '/sobre-mi', '/logros'].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date('2026-11-15'),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.85,
  }));

  const projectRoutes = flagshipProjects.map((project) => ({
    url: absoluteUrl(`/proyectos/${project.slug}`),
    lastModified: new Date('2026-11-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
