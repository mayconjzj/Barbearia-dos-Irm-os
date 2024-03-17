import Image from 'next/image';
import Link from 'next/link';

import { Sanctuarium } from '@/config/sanctuarium';

import { cn } from '@/lib/tailwind-merge';

export type LogoIcon = React.HtmlHTMLAttributes<HTMLImageElement>;

export const LogoIcon = ({ className, ...props }: LogoIcon) => {
  return (
    <Link href="/">
      <Image
        src={Sanctuarium.logo}
        alt="Sanctuarium"
        width={36}
        height={36}
        loading="lazy"
        aria-label="Sanctuarium logo"
        className={cn(className)}
        {...props}
      />
    </Link>
  );
};
