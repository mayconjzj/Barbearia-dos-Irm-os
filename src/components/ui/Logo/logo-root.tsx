import { cn } from '@/lib/tailwind-merge';

export type LogoRootProps = {
  className?: string;
  children: React.ReactNode;
};

export const LogoRoot = ({ className, children, ...props }: LogoRootProps) => {
  return (
    <div className={cn('flex items-center gap-x-2', className)} {...props}>
      {children}
    </div>
  );
};
