import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { links } from '@/config/nav-links';

import { MobileNavbar } from './mobile-navbar';
import { ActiveLink } from './ui/active-link';
import { Logo } from './ui/logo';
import { SocialButton } from './ui/social-button';

export const Header = () => {
  return (
    <header className="flex relative items-center px-4 sm:px-10 py-4 h-[60px] backdrop-blur-lg font-medium border-b-[0.5px] border-border">
      <nav className="hidden sm:flex gap-x-6">
        <Logo href="/">LOGO</Logo>
        <ul className="flex gap-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <ActiveLink href={link.href}>{link.name}</ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
      <MobileNavbar />
      <div className="absolute right-4 sm:right-10 flex">
        <SocialButton
          href="https://instagram.com/sanctuariumbv"
          arial-label="Instagram"
          title="Instagram"
        >
          <FaInstagram size={20} />
        </SocialButton>
        <SocialButton
          href="https://wa.me/5511999999999"
          arial-label="Whatsapp"
          title="Whatsapp"
        >
          <FaWhatsapp size={20} />
        </SocialButton>
      </div>
    </header>
  );
};
