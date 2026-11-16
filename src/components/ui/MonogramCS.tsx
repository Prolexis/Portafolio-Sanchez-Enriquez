import { cn } from '@/lib/utils';

interface BrandWordmarkProps {
  className?: string;
}

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline font-display text-lg font-bold tracking-[-0.045em] text-text-primary sm:text-xl',
        className
      )}
    >
      <span>CSE</span>
      <span className="text-accent" aria-hidden="true">
        .
      </span>
    </span>
  );
}

export function MonogramCS({ className }: BrandWordmarkProps) {
  return <BrandWordmark className={className} />;
}
