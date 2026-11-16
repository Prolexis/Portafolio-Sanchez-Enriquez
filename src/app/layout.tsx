import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
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

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
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
    default: `${profile.fullName} — Software con propósito. Inteligencia aplicada.`,
    template: `%s | ${profile.monogram}`,
  },
  description: profile.heroSubheadline,
  keywords: [
    'Cristhian Alexis Sánchez Enríquez',
    'Cristhian Sánchez',
    'Prolexis',
    'Ingeniería de Sistemas UNT',
    'Software e Inteligencia Artificial',
    'VasoChainAI',
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
    siteName: `${profile.monogram} ${profile.shortName}`,
    title: `${profile.fullName} — Software con propósito. Inteligencia aplicada.`,
    description: profile.heroSubheadline,
    images: [
      {
        url: absoluteUrl(profile.portraitPath),
        width: 1018,
        height: 1344,
        alt: profile.portraitAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.fullName} — Software con propósito. Inteligencia aplicada.`,
    description: profile.heroSubheadline,
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
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-obsidian font-sans text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cobalt focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido principal
        </a>

        <div className="relative flex min-h-screen flex-col">
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
