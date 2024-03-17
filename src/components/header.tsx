import { links } from '@/config/nav-links';
import { Sanctuarium } from '@/config/sanctuarium';

import { MobileNavbar } from './mobile-navbar';
import { ActiveLink } from './ui/active-link';
import { Logo } from './ui/Logo';
import { SocialButton } from './ui/social-button';

export const Header = () => {
  return (
    <header className="flex fixed top-0 z-50 w-screen items-center px-2 md:px-20 py-4 h-[60px] backdrop-blur-lg font-medium border-b-[0.5px] border-border">
      <nav className="hidden md:flex md:items-center gap-x-6">
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

      <div className="absolute right-2 md:right-20 flex">
        <SocialButton
          href={Sanctuarium.contact.instagram.href}
          title={Sanctuarium.contact.instagram.name}
        >
          {Sanctuarium.contact.instagram.icon(20)}
        </SocialButton>
        <SocialButton
          href={Sanctuarium.contact.whatsapp.href}
          title={Sanctuarium.contact.whatsapp.name}
        >
          {Sanctuarium.contact.whatsapp.icon(20)}
        </SocialButton>
      </div>
    </header>
  );
};
