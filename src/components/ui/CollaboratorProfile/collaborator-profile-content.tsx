import { cn } from '@/lib/tailwind-merge';

export type CollaboratorProfileContentProps =
  React.AllHTMLAttributes<HTMLDivElement>;

export const CollaboratorProfileContent = ({
  children,
  className,
  ...props
}: CollaboratorProfileContentProps) => {
  return (
    <div className={cn('absolute bottom-5 left-5', className)} {...props}>
      {children}
    </div>
  );
};
