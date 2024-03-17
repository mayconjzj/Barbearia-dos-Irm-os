import Link from 'next/link';

import { Sanctuarium } from '@/config/sanctuarium';

import { cn } from '@/lib/tailwind-merge';

export type LogoNameProps = React.AllHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
};

export const LogoName = ({ className, ...props }: LogoNameProps) => {
  return (
    <Link
      href="/"
      className={cn('text-foreground font-bold', className)}
      title="Sanctuarium"
      {...props}
    >
      {Sanctuarium.name}
    </Link>
  );
};
