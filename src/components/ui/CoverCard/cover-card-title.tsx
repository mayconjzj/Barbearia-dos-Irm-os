import { cn } from '@/lib/tailwind-merge';

export type CoverCardTitleProps = React.AllHTMLAttributes<HTMLHeadingElement>;

export const CoverCardTitle = ({
  children,
  className,
  ...props
}: CoverCardTitleProps) => {
  return (
    <h3
      className={cn('text-2xl font-bold text-foreground', className)}
      {...props}
    >
      {children}
    </h3>
  );
};
