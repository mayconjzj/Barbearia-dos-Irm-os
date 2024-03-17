import Link from 'next/link';

import { links } from '@/config/nav-links';
import { Sanctuarium } from '@/config/sanctuarium';

import { ActiveLink } from './ui/active-link';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="px-2 md:px-20">
      <section className="lg:grid lg:grid-cols-3 py-4 border-b-[0.5px] border-border space-y-3">
        <article className="space-y-3 lg:pr-2 py-4 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-border">
          <div className="space-y-3">
            <h1 className="text-4xl font-black">{Sanctuarium.name}</h1>
            <p className="text-muted font-light">{Sanctuarium.description}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold">REDES SOCIAIS</h3>
            <div className="space-x-2">
              <Button
                asChild
                className="rounded-full w-12 h-12 p-1 flex items-center justify-center"
              >
                <Link
                  href={Sanctuarium.contact.instagram.href}
                  target="_blank"
                  aria-label={Sanctuarium.contact.instagram.name}
                >
                  {Sanctuarium.contact.instagram.icon}
                </Link>
              </Button>
            </div>
          </div>
        </article>

        <article className="space-y-3 lg:px-2 py-4 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-border">
          <h2 className="text-2xl font-bold">NAVEGAÇÂO</h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <ActiveLink href={link.href} title={link.name}>
                  {link.name}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-3 lg:pl-2">
          <h2 className="text-2xl font-bold">CONTATO</h2>
          <div>
            <div className="flex items-center gap-x-4">
              {Sanctuarium.contact.phone.icon}
              <p className="text-foreground font-light">
                {Sanctuarium.contact.phone.href}
              </p>
            </div>

            <div className="flex items-center gap-x-4">
              {Sanctuarium.address.icon}
              <p className="text-foreground font-light">
                {Sanctuarium.address.address}
              </p>
            </div>

            <iframe
              src={Sanctuarium.address.href}
              width="100%"
              height="200px"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Localização"
              className="rounded-lg"
            ></iframe>
          </div>
        </article>
      </section>

      <section className="py-4">
        <p className="text-muted font-light">
          <Link
            className="text-foreground font-bold"
            href="https://instagram.com/mayconjzj"
            target="_blank"
            title="Instagram de MAYCON DOUGLAS"
          >
            MAYCON DOUGLAS
          </Link>{' '}
          &copy; {new Date().getFullYear()} todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
};
