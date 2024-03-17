import Image from 'next/image';
import Link from 'next/link';

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

export type LogoIcon = React.HtmlHTMLAttributes<HTMLImageElement>;

export const LogoIcon = ({ className, ...props }: LogoIcon) => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Sanctuarium"
        width={36}
        height={36}
        priority
        className={cn(className)}
        {...props}
      />
    </Link>
  );
};

export type LogoNameProps = React.AllHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
};

const LogoName = ({ className, ...props }: LogoNameProps) => {
  return (
    <Link href="/" className={cn('text-foreground', className)} {...props}>
      Sanctuarium
    </Link>
  );
};

export const Logo = {
  Root: LogoRoot,
  Name: LogoName,
  Icon: LogoIcon
};
