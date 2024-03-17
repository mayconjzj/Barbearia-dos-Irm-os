import { cn } from '@/lib/tailwind-merge';

export type CollaboratorProfileRootProps = React.HTMLAttributes<HTMLDivElement>;

export const CollaboratorProfileRoot = ({
  children,
  className,
  ...props
}: CollaboratorProfileRootProps) => {
  return (
    <div
      className={cn(
        'relative min-w-[280px] h-[450px] rounded-lg overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
