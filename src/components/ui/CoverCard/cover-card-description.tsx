import { cn } from '@/lib/tailwind-merge';

export type CoverCardDescriptionProps =
  React.AllHTMLAttributes<HTMLSpanElement>;

export const CoverCardDescription = ({
  children,
  className,
  ...props
}: CoverCardDescriptionProps) => {
  return (
    <span className={cn('text-muted font-light', className)} {...props}>
      {children}
    </span>
  );
};
