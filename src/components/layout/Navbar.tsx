'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { BrandWordmark } from '@/components/ui/MonogramCS';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/#especialidades', label: 'Especialidades' },
  { href: '/logros', label: 'Logros' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/#contacto', label: 'Contacto' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function isLinkActive(href: string): boolean {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors duration-300',
        scrolled
          ? 'border-b border-white/10 bg-obsidian/92 backdrop-blur-md'
          : 'border-b border-white/[0.06] bg-carbon/85 backdrop-blur-sm'
      )}
    >
      <div className="atelier-container flex h-[68px] items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          aria-label="Inicio — Cristhian Alexis Sánchez Enríquez"
          className="inline-flex items-center py-1 transition-opacity hover:opacity-85"
        >
          <BrandWordmark />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-2 lg:flex xl:gap-4">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative px-2.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200',
                  active
                    ? 'text-white'
                    : 'text-editorial-muted hover:text-white'
                )}
              >
                <span>{item.label}</span>
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2.5 bottom-0.5 h-[1.5px] bg-cobalt"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-editorial-muted transition-colors hover:text-white"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-cobalt-soft" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-white/30 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-obsidian px-5 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between border-b border-white/[0.07] py-3.5 text-sm font-medium transition-colors',
                    active ? 'text-white' : 'text-editorial-muted hover:text-white'
                  )}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
            <div className="mt-5 flex items-center justify-between gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-editorial-muted hover:text-white"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-cobalt-soft" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-2 text-xs font-semibold text-white"
              >
                <span>Hablemos</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
