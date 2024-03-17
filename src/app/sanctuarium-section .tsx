import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const SanctuariumSection = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-60px)] flex items-end md:items-center"
    >
      <div className="absolute inset-0 -z-10 w-full h-screen">
        <Image
          src="/images/barber-backdrop.jpg"
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
        <h1 className="text-5xl font-black text-foreground">Sanctuarium</h1>
        <p className="text-muted font-light">
          Uma fusão única de barbearia e estúdio de tatuagens, onde estilo e
          autoexpressão se encontram. Nossa equipe dedicada oferece cortes de
          cabelo, barbas e tatuagens personalizadas em um ambiente acolhedor e
          sofisticado. Cada cliente é tratado de forma única, celebrando sua
          individualidade. Venha nos visitar e encontre seu santuário pessoal de
          estilo e beleza.
        </p>
        <Button asChild>
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            title="Contato"
          >
            Contato
          </Link>
        </Button>
      </div>
    </section>
  );
};
