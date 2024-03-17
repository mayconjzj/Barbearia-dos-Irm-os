import { cn } from '@/lib/tailwind-merge';

export type CoverCardContentProps = React.AllHTMLAttributes<HTMLDivElement>;

export const CoverCardContent = ({
  children,
  className,
  ...props
}: CoverCardContentProps) => {
  return (
    <div className={cn('absolute bottom-5 left-5', className)} {...props}>
      {children}
    </div>
  );
};
