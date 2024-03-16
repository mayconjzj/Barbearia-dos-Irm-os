import Link from 'next/link';

import { cn } from '@/lib/tailwind-merge';

export type LogoProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const Logo = ({ children, href, className, ...props }: LogoProps) => {
  return (
    <div>
      <Link href={href} className={cn('text-foreground', className)} {...props}>
        {children}
      </Link>
    </div>
  );
};
