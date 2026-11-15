'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: 'default' | 'compact';
}

export function CopyEmailButton({
  email,
  className,
  variant = 'default',
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Correo ${email} copiado` : `Copiar correo ${email}`}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-bg-card px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:bg-bg-subtle',
        variant === 'compact' && 'px-2.5 py-1.5 text-xs',
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
          <span role="status" aria-live="polite">
            Correo copiado
          </span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>Copiar correo</span>
        </>
      )}
    </button>
  );
}
