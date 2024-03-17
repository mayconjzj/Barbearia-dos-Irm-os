import { cn } from '@/lib/tailwind-merge';

export type CollaboratorProfileOfficeProps =
  React.AllHTMLAttributes<HTMLSpanElement>;

export const CollaboratorProfileOffice = ({
  children,
  className,
  ...props
}: CollaboratorProfileOfficeProps) => {
  return (
    <span className={cn('text-muted font-light', className)} {...props}>
      {children}
    </span>
  );
};
