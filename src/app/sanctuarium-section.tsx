import Image from 'next/image';
import Link from 'next/link';

import { Sanctuarium } from '@/config/sanctuarium';

import { Button } from '@/components/ui/button';

export const SanctuariumSection = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-60px)] flex items-end md:items-center border-b-[0.5px] border-border"
    >
      <div className="absolute inset-0 -z-10 w-full h-screen">
        <Image
          src={Sanctuarium.backdrop}
          alt="Sanctuarium"
          fill
          priority
          aria-label="Backdrop for the homepage"
          className="object-cover object-[80%_0%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      <div className="max-w-[600px] mb-10 md:mb-0 space-y-3">
        <h1 className="text-5xl font-black text-foreground">
          {Sanctuarium.name}
        </h1>
        <p className="text-muted font-light line-clamp-5">
          {Sanctuarium.description}
        </p>
        <Button asChild>
          <Link
            href={Sanctuarium.contact.whatsapp.href}
            target="_blank"
            title={Sanctuarium.contact.whatsapp.name}
          >
            Contato
          </Link>
        </Button>
      </div>
    </section>
  );
};
