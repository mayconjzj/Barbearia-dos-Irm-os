import { cn } from '@/lib/tailwind-merge';

export type CoverCardRootProps = React.HTMLAttributes<HTMLDivElement>;

export const CoverCardRoot = ({
  children,
  className,
  ...props
}: CoverCardRootProps) => {
  return (
    <div className={cn('relative', className)} {...props}>
      {children}
    </div>
  );
};
