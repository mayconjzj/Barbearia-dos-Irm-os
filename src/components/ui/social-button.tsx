import Link from 'next/link';

import { Button } from './button';

export type SocialButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href: string;
    children: React.ReactNode;
  };
export const SocialButton = ({
  href,
  children,
  title,
  ...props
}: SocialButtonProps) => {
  return (
    <Button asChild variant="ghost" {...props}>
      <Link href={href} target="_blank" title={title} aria-label={title}>
        {children}
      </Link>
    </Button>
  );
};
