'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VariantProps, tv } from 'tailwind-variants';

export const activeLinkVariants = tv({
  base: 'text-muted font-light dark:font-bold hover:text-foreground duration-300',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl'
    },
    isActive: {
      true: 'text-foreground',
      false: 'text-muted'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

export type ActiveLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof activeLinkVariants> & {
    children: React.ReactNode;
    href: string;
  };

export const ActiveLink = ({
  children,
  className,
  size,
  href,
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={activeLinkVariants({ className, size, isActive })}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
