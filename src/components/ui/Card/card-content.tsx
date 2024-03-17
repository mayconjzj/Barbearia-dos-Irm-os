import { cn } from '@/lib/tailwind-merge';

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};
