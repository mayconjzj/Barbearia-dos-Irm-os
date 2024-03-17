import { cn } from '@/lib/tailwind-merge';

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = ({
  className,
  children,
  ...props
}: CardTitleProps) => {
  return (
    <h3 className={cn('text-2xl font-bold', className)} {...props}>
      {children}
    </h3>
  );
};
