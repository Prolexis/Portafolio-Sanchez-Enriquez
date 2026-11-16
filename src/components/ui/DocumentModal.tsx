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
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#090B10]/92 p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-ruleDark bg-carbon shadow-editorialDark">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-ruleDark px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1">
            {subtitle && (
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt">
                {subtitle}
              </p>
            )}
            <h2
              id={titleId}
              className="mt-1 font-display text-base font-semibold text-white sm:text-lg"
            >
              {title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomed((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-md border border-ruleDark bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/30"
              aria-pressed={zoomed}
            >
              {zoomed ? (
                <>
                  <ZoomOut className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  <span>Ajustar</span>
                </>
              ) : (
                <>
                  <ZoomIn className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                  <span>Zoom</span>
                </>
              )}
            </button>

            <a
              href={imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-ruleDark bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-white/30"
            >
              <ExternalLink className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
              <span className="hidden sm:inline">Abrir original</span>
            </a>

            <a
              href={imagePath}
              download={fileName}
              className="inline-flex items-center gap-1.5 rounded-md bg-cobalt px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-cobalt-hover"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Descargar</span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar visor del documento"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-ruleDark bg-white/[0.04] text-mutedDark transition-colors hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-[#06080B] p-3 sm:p-5">
          <div className="flex min-h-full items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePath}
              alt={imageAlt}
              className={cn(
                'rounded-lg bg-black/40 object-contain transition-all duration-200',
                zoomed
                  ? 'max-w-none w-[160%] sm:w-[135%] cursor-zoom-out'
                  : 'max-h-[62vh] w-auto max-w-full cursor-zoom-in'
              )}
              onClick={() => setZoomed((prev) => !prev)}
            />
          </div>
        </div>

        {(issuer || dateLabel || signers.length > 0 || integrityNote) && (
          <div className="space-y-1.5 border-t border-ruleDark bg-carbon px-4 py-4 text-xs text-mutedDark sm:px-6">
            {(issuer || dateLabel) && (
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {issuer && (
                  <p>
                    <span className="font-semibold text-white">Emisor:</span> {issuer}
                  </p>
                )}
                {dateLabel && (
                  <p>
                    <span className="font-semibold text-white">Fecha:</span> {dateLabel}
                  </p>
                )}
              </div>
            )}
            {signers.length > 0 && (
              <p>
                <span className="font-semibold text-white">Firmas visibles:</span>{' '}
                {signers.join(' · ')}
              </p>
            )}
            {integrityNote && <p>{integrityNote}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
