import Link from 'next/link';

import { Button } from './button';

export type SocialButtonProps = {
  href: string;
  children: React.ReactNode;
};
export const SocialButton = ({ href, children }: SocialButtonProps) => {
  return (
    <Button asChild variant="ghost">
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Button>
  );
};
