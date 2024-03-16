import Link from 'next/link';

export type LogoProps = {
  children: React.ReactNode;
  href: string;
};

export const Logo = ({ children, href }: LogoProps) => {
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  );
};
