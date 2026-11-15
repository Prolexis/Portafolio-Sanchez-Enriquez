'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { MonogramCS } from '@/components/ui/MonogramCS';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/logros', label: 'Logros' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center gap-3 rounded-lg py-1 transition-opacity hover:opacity-90"
        >
          <MonogramCS className="h-8 w-8" />
          <div className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight text-text-primary sm:text-base">
              {profile.shortName}
            </span>
            <span className="block font-mono text-[11px] text-text-muted">
              /{profile.handle}
            </span>
          </div>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-bg-card text-text-primary shadow-[inset_0_0_0_1px_rgba(109,157,255,0.28)]'
                    : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border-strong bg-bg-card px-3 py-1.5 text-sm font-medium text-text-primary transition-colors hover:border-accent/50"
            >
              CV (PDF)
            </a>
          )}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3.5 py-1.5 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-subtle"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-bg-card text-text-primary md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border-subtle bg-bg-elevated px-4 py-4 md:hidden"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-bg-card text-text-primary shadow-[inset_0_0_0_1px_rgba(109,157,255,0.28)]'
                      : 'text-text-secondary hover:bg-bg-card hover:text-text-primary'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-border-subtle pt-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3.5 py-2 text-sm font-medium text-text-primary"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-medium text-[#060911]"
              >
                <span>Contactar</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
