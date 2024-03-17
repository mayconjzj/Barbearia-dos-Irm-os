import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

import { links } from '@/config/nav-links';

import { ActiveLink } from './ui/active-link';
import { Button } from './ui/button';
import { Logo } from './ui/logo';

export const Footer = () => {
  return (
    <footer className="px-2 md:px-20">
      <section className="lg:grid lg:grid-cols-3 py-4 border-b-[0.5px] border-border space-y-3">
        <article className="space-y-3 lg:pr-2 py-4 border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-border">
          <div className="space-y-3">
            <Logo.Root>
              <Logo.Name className="text-4xl font-black" />
            </Logo.Root>
            <p className="text-muted font-light">
              No Sanctuarium, combinamos barbearia e estúdio de tatuagens para
              oferecer uma experiência de estilo completa. Nossa equipe
              talentosa proporciona cortes de cabelo, barbas e tatuagens
              personalizadas, tudo em um ambiente acolhedor e único. Celebre sua
              individualidade conosco e descubra seu santuário pessoal de beleza
              e autoexpressão.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold">REDES SOCIAIS</h3>
            <div className="space-x-2">
              <Button
                asChild
                className="rounded-full w-12 h-12 p-1 flex items-center justify-center"
              >
                <Link href="https://instagram.com/sanctuariumbv">
                  <FaInstagram size={24} />
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
                <ActiveLink href={link.href}>{link.name}</ActiveLink>
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-3 lg:pl-2">
          <h2 className="text-2xl font-bold">CONTATO</h2>
          <div>
            <div className="flex items-center gap-x-4">
              <BsFillTelephoneFill size={15} />
              <p className="text-foreground font-light">(11) 99999-9999</p>
            </div>

            <div className="flex items-center gap-x-4">
              <FaMapLocationDot size={24} />
              <p className="text-foreground font-light">
                Av. Consolação de Matos, 103 - Cidade Satélite, Boa Vista - RR,
                69317-474
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1557.3664139655757!2d-60.74404789965962!3d2.841346887538738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d9305cf8a91f0b9%3A0xd4c1081b49bf0610!2sEst%C3%BAdio%20de%20tatuagem%20Sanctatinta!5e0!3m2!1spt-BR!2sbr!4v1710634473100!5m2!1spt-BR!2sbr"
              width="100%"
              height="200px"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
          >
            MAYCON DOUGLAS
          </Link>{' '}
          &copy; {new Date().getFullYear()} todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
};
