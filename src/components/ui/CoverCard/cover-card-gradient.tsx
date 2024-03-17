import { cn } from '@/lib/tailwind-merge';

export const CoverCardGradient = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-b from-transparent to-background',
        className
      )}
      {...props}
    />
  );
};
