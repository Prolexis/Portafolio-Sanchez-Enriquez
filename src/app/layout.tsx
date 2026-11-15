import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SITE_URL, absoluteUrl } from '@/lib/site';
import { profile } from '@/data/profile';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.brandLabel} — Full-Stack, IA Aplicada y Datos`,
    template: `%s | ${profile.shortName}`,
  },
  description:
    'Portafolio técnico de Cristhian Alexis Sánchez Enríquez (Prolexis), estudiante de Ingeniería de Sistemas en la Universidad Nacional de Trujillo (UNT). Proyectos verificables en full-stack, IA aplicada, datos y seguridad.',
  keywords: [
    'Cristhian Sánchez',
    'Cristhian Alexis Sánchez Enríquez',
    'Prolexis',
    'Ingeniería de Sistemas UNT',
    'Portafolio Full Stack',
    'IA Aplicada',
    'VasoChain AI',
    'Next.js TypeScript Python',
  ],
  authors: [{ name: profile.fullName, url: profile.githubUrl }],
  creator: profile.fullName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: SITE_URL,
    siteName: profile.brandLabel,
    title: `${profile.brandLabel} — Software Full-Stack, IA Aplicada y Datos`,
    description:
      'Proyectos de software, inteligencia artificial, analítica SQL e infraestructura verificable desarrollados desde Trujillo, Perú.',
    images: [
      {
        url: absoluteUrl(profile.portraitPath),
        width: 1048,
        height: 1376,
        alt: profile.portraitAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.brandLabel} — Software Full-Stack, IA Aplicada y Datos`,
    description:
      'Estudiante de Ingeniería de Sistemas (UNT). Casos de estudio técnicos, código abierto y logros documentados.',
    images: [absoluteUrl(profile.portraitPath)],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    alternateName: profile.handle,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    image: absoluteUrl(profile.portraitPath),
    jobTitle: profile.career,
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: profile.university,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Trujillo',
      addressCountry: 'PE',
    },
    sameAs: [profile.githubUrl, profile.linkedinUrl],
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#060911]"
        >
          Saltar al contenido principal
        </a>

        <div className="relative flex min-h-screen flex-col">
          <div
            aria-hidden="true"
            className="tech-grid-bg tech-radial-mask pointer-events-none fixed inset-x-0 top-0 -z-10 h-[560px]"
          />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
