import { cn } from '@/lib/tailwind-merge';

export type CardRootProps = React.HTMLAttributes<HTMLDivElement>;

export const CardRoot = ({ className, children, ...props }: CardRootProps) => {
  return (
    <div
      className={cn(
        'border-[0.5px] border-border duration-300 hover:border-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
