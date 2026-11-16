import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, GraduationCap, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { FocusAreasSection } from '@/components/ui/FocusAreasSection';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Perfil y formación de ${profile.fullName}, ${profile.career} en la ${profile.university}.`,
  alternates: {
    canonical: '/sobre-mi',
  },
};

export default function SobreMiPage() {
  return (
    <div data-header-theme="light" className="bg-ivory text-ink">
      <div className="border-b border-ruleLight py-14 sm:py-20">
        <div className="signature-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cobalt">
                Sobre mí
              </p>
              <h1 className="type-h1 mt-3 font-display font-semibold text-ink">
                {profile.aboutTitle}
              </h1>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-mutedLight">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-cobalt" aria-hidden="true" />
                  <span>
                    {profile.career} — {profile.university}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cobalt" aria-hidden="true" />
                  <span>{profile.location}</span>
                </span>
              </div>

              <div className="mt-8 space-y-4 text-mutedLight">
                {profile.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className="type-body-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="mx-auto max-w-[240px] rounded-xl bg-white p-3 shadow-editorialLight lg:ml-auto">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-ivory">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.portraitPath}
                    alt={profile.portraitAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="font-display text-sm font-semibold text-ink">
                    {profile.shortName}
                  </p>
                  <p className="mt-0.5 text-xs text-mutedLight">{profile.faculty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 text-ink">
        <div className="signature-container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="type-h2 font-display font-semibold text-ink">
              Mi enfoque tecnológico.
            </h2>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
            >
              <span>Ver proyectos</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <FocusAreasSection />
        </div>
      </section>

      <section className="border-t border-ruleLight bg-ivory py-16 text-ink">
        <div className="signature-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="type-h2 font-display font-semibold text-ink">
                {profile.contactTitle}
              </h2>
              <p className="type-body-lg mt-3 max-w-xl text-mutedLight">
                {profile.contactText}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar correo</span>
                </a>
                <CopyEmailButton email={profile.email} tone="light" />
              </div>
              <div className="flex gap-5 pt-1 text-sm">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-ink hover:text-cobalt"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                </a>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-ink hover:text-cobalt"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
