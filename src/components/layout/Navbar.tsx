'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    function syncHeaderTheme() {
      const themedSections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-header-theme]')
      );

      if (themedSections.length === 0) {
        if (pathname.startsWith('/proyectos') || pathname.startsWith('/sobre-mi')) {
          setTheme('light');
        } else {
          setTheme('dark');
        }
        return;
      }

      const probeY = 40;
      let matched: 'dark' | 'light' | null = null;

      for (const section of themedSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          const attr = section.getAttribute('data-header-theme');
          if (attr === 'light' || attr === 'dark') {
            matched = attr;
          }
          break;
        }
      }

      if (matched) {
        setTheme(matched);
      } else {
        const firstAttr = themedSections[0].getAttribute('data-header-theme');
        setTheme(firstAttr === 'light' ? 'light' : 'dark');
      }
    }

    syncHeaderTheme();
    window.addEventListener('scroll', syncHeaderTheme, { passive: true });
    window.addEventListener('resize', syncHeaderTheme, { passive: true });
    return () => {
      window.removeEventListener('scroll', syncHeaderTheme);
      window.removeEventListener('resize', syncHeaderTheme);
    };
  }, [pathname]);

  function isLinkActive(href: string): boolean {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const isLight = theme === 'light';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-[72px] transition-colors duration-200',
        isLight
          ? 'border-b border-ruleLight bg-ivory text-ink shadow-[0_1px_0_0_rgba(23,28,37,0.06)]'
          : 'border-b border-ruleDark bg-carbon text-white'
      )}
    >
      <div className="signature-container flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          aria-label="Inicio — Cristhian Alexis Sánchez Enríquez"
          className="inline-flex items-center py-1 transition-opacity hover:opacity-80"
        >
          <BrandWordmark className={isLight ? 'text-ink' : 'text-white'} />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative py-2 text-[14px] font-medium tracking-[-0.01em] transition-colors duration-200',
                  isLight
                    ? active
                      ? 'text-ink'
                      : 'text-mutedLight hover:text-ink'
                    : active
                      ? 'text-white'
                      : 'text-mutedDark hover:text-white'
                )}
              >
                <span>{item.label}</span>
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-cobalt"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors lg:hidden',
            isLight
              ? 'border-ruleLight bg-white text-ink hover:border-ink/35'
              : 'border-ruleDark bg-white/[0.04] text-white hover:border-white/30'
          )}
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
          className={cn(
            'border-b px-6 pb-8 pt-4 lg:hidden',
            isLight
              ? 'border-ruleLight bg-ivory text-ink'
              : 'border-ruleDark bg-carbon text-white'
          )}
        >
          <nav aria-label="Navegación móvil" className="flex flex-col">
            {navLinks.map((item, idx) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between border-b py-4 text-base font-medium transition-colors',
                    isLight ? 'border-ruleLight' : 'border-ruleDark',
                    isLight
                      ? active
                        ? 'text-ink'
                        : 'text-mutedLight hover:text-ink'
                      : active
                        ? 'text-white'
                        : 'text-mutedDark hover:text-white'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cobalt">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
