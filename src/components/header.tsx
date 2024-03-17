import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { links } from '@/config/nav-links';

import { MobileNavbar } from './mobile-navbar';
import { ActiveLink } from './ui/active-link';
import { Logo } from './ui/logo';
import { SocialButton } from './ui/social-button';

export const Header = () => {
  return (
    <header className="flex fixed top-0 z-50 w-screen items-center px-2 sm:px-20 py-4 h-[60px] backdrop-blur-lg font-medium border-b-[0.5px] border-border">
      <nav className="hidden sm:flex sm:items-center gap-x-6">
        <Logo.Root>
          <Logo.Icon />
        </Logo.Root>
        <ul className="flex items-center gap-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <ActiveLink href={link.href} title={link.name}>
                {link.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>

      <MobileNavbar />

      <div className="absolute right-2 sm:right-20 flex">
        <SocialButton
          href="https://instagram.com/sanctuariumbv"
          title="Instagram"
        >
          <FaInstagram size={20} />
        </SocialButton>
        <SocialButton href="https://wa.me/5511999999999" title="Whatsapp">
          <FaWhatsapp size={20} />
        </SocialButton>
      </div>
    </header>
  );
};
