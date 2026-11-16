'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: 'default' | 'compact';
  tone?: 'dark' | 'light';
}

export function CopyEmailButton({
  email,
  className,
  variant = 'default',
  tone = 'light',
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
        'inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors',
        tone === 'light'
          ? 'border-ruleLight bg-white text-ink hover:border-ink/35'
          : 'border-ruleDark bg-white/[0.04] text-white hover:border-white/35',
        variant === 'compact' && 'px-3 py-1.5 text-xs',
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
          <span role="status" aria-live="polite">
            Correo copiado
          </span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 shrink-0 text-cobalt" aria-hidden="true" />
          <span>Copiar correo</span>
        </>
      )}
    </button>
  );
}
