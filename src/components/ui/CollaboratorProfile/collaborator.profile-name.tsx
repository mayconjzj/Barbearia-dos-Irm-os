import { cn } from '@/lib/tailwind-merge';

export type CollaboratorProfileNameProps =
  React.AllHTMLAttributes<HTMLHeadingElement>;

export const CollaboratorProfileName = ({
  children,
  className,
  ...props
}: CollaboratorProfileNameProps) => {
  return (
    <h3
      className={cn('text-2xl font-bold text-foreground', className)}
      {...props}
    >
      {children}
    </h3>
  );
};
