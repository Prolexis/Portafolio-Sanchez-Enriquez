import { cn } from '@/lib/utils';

interface MonogramCSProps {
  className?: string;
}

export function MonogramCS({ className }: MonogramCSProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn('h-8 w-8 shrink-0', className)}
    >
      <rect width="64" height="64" rx="14" fill="#0D131E" />
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="61"
        rx="12.5"
        stroke="#6D9DFF"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M29 20H21C16.5817 20 13 23.5817 13 28V36C13 40.4183 16.5817 44 21 44H29"
        stroke="#F4F7FB"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M51 23C51 21.3431 49.6569 20 48 20H40C37.2386 20 35 22.2386 35 25V27C35 29.7614 37.2386 32 40 32H46C48.7614 32 51 34.2386 51 37V39C51 41.7614 48.7614 44 46 44H37C35.3431 44 34 42.6569 34 41"
        stroke="#6D9DFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
