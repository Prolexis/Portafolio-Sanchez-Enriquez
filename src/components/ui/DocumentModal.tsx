'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Download, ExternalLink, X, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  issuer?: string;
  dateLabel?: string;
  signers?: string[];
  integrityNote?: string;
  imagePath: string;
  imageAlt: string;
}

export function DocumentModal({
  isOpen,
  onClose,
  title,
  subtitle,
  issuer,
  dateLabel,
  signers = [],
  integrityNote,
  imagePath,
  imageAlt,
}: DocumentModalProps) {
  const [zoomed, setZoomed] = useState(false);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setZoomed(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const fileName = imagePath.split('/').pop() || 'documento-verificado.png';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#04060A]/85 p-3 backdrop-blur-sm sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated shadow-panel">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border-subtle px-4 py-3.5 sm:px-6">
          <div className="min-w-0 flex-1">
            {subtitle && (
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {subtitle}
              </p>
            )}
            <h2
              id={titleId}
              className="mt-0.5 font-display text-base font-semibold text-text-primary sm:text-lg"
            >
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomed((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-subtle"
              aria-pressed={zoomed}
            >
              {zoomed ? (
                <>
                  <ZoomOut className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  <span>Ajustar vista</span>
                </>
              ) : (
                <>
                  <ZoomIn className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  <span>Ampliar zoom</span>
                </>
              )}
            </button>

            <a
              href={imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong bg-bg-card px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-subtle"
            >
              <ExternalLink className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span className="hidden sm:inline">Abrir original</span>
            </a>

            <a
              href={imagePath}
              download={fileName}
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/15 px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:bg-accent/25"
            >
              <Download className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              <span>Descargar</span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar visor del documento"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong bg-bg-card text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-[#070A10] p-3 sm:p-5">
          <div className="flex min-h-full items-center justify-center">
            {/* Imagen renderizada siempre sin recorte (object-contain) para conservar sellos y firmas completas */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePath}
              alt={imageAlt}
              className={cn(
                'rounded-lg border border-border-subtle bg-black/40 object-contain transition-all duration-200',
                zoomed
                  ? 'max-w-none w-[160%] sm:w-[135%] cursor-zoom-out'
                  : 'max-h-[62vh] w-auto max-w-full cursor-zoom-in'
              )}
              onClick={() => setZoomed((prev) => !prev)}
            />
          </div>
        </div>

        {(issuer || dateLabel || signers.length > 0 || integrityNote) && (
          <div className="space-y-2 border-t border-border-subtle bg-bg-elevated px-4 py-3.5 text-xs text-text-secondary sm:px-6">
            {(issuer || dateLabel) && (
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {issuer && (
                  <p>
                    <span className="font-semibold text-text-primary">Emisor:</span> {issuer}
                  </p>
                )}
                {dateLabel && (
                  <p>
                    <span className="font-semibold text-text-primary">Fecha / lugar:</span>{' '}
                    {dateLabel}
                  </p>
                )}
              </div>
            )}
            {signers.length > 0 && (
              <p>
                <span className="font-semibold text-text-primary">Firmas visibles:</span>{' '}
                {signers.join(' · ')}
              </p>
            )}
            {integrityNote && <p className="text-text-muted">{integrityNote}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
