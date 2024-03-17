import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <article className="max-w-[1200px] m-auto">
      <section
        id="home"
        className="min-h-[calc(100vh-60px)] flex items-end sm:items-center"
      >
        <div className="absolute inset-0 -z-10 w-full h-screen">
          <Image
            src="/images/barber-backdrop.jpg"
            alt="Sanctuarium"
            fill
            priority
            className="object-cover object-[80%_0%] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>

        <div className="max-w-[600px] mb-10 sm:mb-0 space-y-3">
          <h1 className="text-5xl font-black text-foreground">Sanctuarium</h1>
          <p className="text-muted font-light">
            Uma fusão única de barbearia e estúdio de tatuagens, onde estilo e
            autoexpressão se encontram. Nossa equipe dedicada oferece cortes de
            cabelo, barbas e tatuagens personalizadas em um ambiente acolhedor e
            sofisticado. Cada cliente é tratado de forma única, celebrando sua
            individualidade. Venha nos visitar e encontre seu santuário pessoal
            de estilo e beleza.
          </p>
          <Button asChild aria-label="Contato" title="Contato">
            <Link href="https://wa.me/5511999999999">Contato</Link>
          </Button>
        </div>
      </section>

      <div className="space-y-10">
        <section id="about" className="pt-16">
          <div className="space-y-3">
            <div className="max-w-[600px] space-y-3">
              <h2 className="text-3xl font-black">Quem Somos</h2>
              <p className="text-muted font-light">
                No Sanctuarium, nossos especialistas em cortes e tatuagens estão
                prontos para transformar sua aparência e celebrar sua
                autenticidade.
              </p>
            </div>

            <h3 className="text-2xl font-bold">Nossos colaboradores</h3>
            <div className="dark flex gap-x-3 overflow-auto">
              <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/barbeiro.jpg"
                  alt="Barbeiro"
                  fill
                  priority
                  className="object-cover object-center inset-0 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-bold text-foreground">
                    Robertinho
                  </h3>
                  <span className="text-muted font-light">Barbeiro</span>
                </div>
              </div>

              <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/tatuadora.jpg"
                  alt="Barbeiro"
                  fill
                  priority
                  className="object-cover object-center inset-0 -z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-2xl font-bold text-foreground">Evelyn</h3>
                  <span className="text-muted font-light">Tatuadora</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <h2 className="text-3xl font-black">Serviços</h2>
        </section>

        <section id="schedules">
          <h2 className="text-3xl font-black">Horários</h2>
        </section>

        <section id="gallery">
          <h2 className="text-3xl font-black">Galeria</h2>
        </section>
      </div>
    </article>
  );
}
