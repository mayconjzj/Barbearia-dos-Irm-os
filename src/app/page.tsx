import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <article className="max-w-[1200px] m-auto">
      <section className="min-h-[calc(100vh-60px)] flex items-end sm:items-center">
        <div className="absolute inset-0 -z-10 w-full h-screen">
          <Image
            className="object-cover object-[80%_0%] md:object-center"
            src="/images/barber-backdrop.jpg"
            alt="Sanctuarium"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
        </div>
        <div className="max-w-[600px] mb-10 sm:mb-0 space-y-3">
          <h1 className="text-5xl font-black">Barbearia dos Irmãos</h1>
          <p className="text-muted font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            doloremque, officia ut consectetur omnis, corporis in ea sapiente
            velit harum unde hic vitae. Ab quod architecto beatae veritatis
            quidem unde!
          </p>
          <Button asChild aria-label="Contato" title="Contato">
            <Link href="/contato">Contato</Link>
          </Button>
        </div>
      </section>
      {/* <div className="space-y-10 max-w-[800px]">
        <section>
          <div className="space-y-3">
            <h2 className="text-4xl font-black">Produtos</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              distinctio magnam obcaecati error voluptates nam minus numquam
              tempore odit vel est sunt eveniet ea, asperiores beatae cumque.
              Repudiandae, exercitationem ipsam.
            </p>
          </div>
        </section>
        <section>
          <div className="space-y-3">
            <h2 className="text-4xl font-black">Serviços</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              distinctio magnam obcaecati error voluptates nam minus numquam
              tempore odit vel est sunt eveniet ea, asperiores beatae cumque.
              Repudiandae, exercitationem ipsam.
            </p>
          </div>
        </section>
      </div> */}
    </article>
  );
}
