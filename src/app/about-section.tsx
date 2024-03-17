import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="pt-16">
      <div className="space-y-3">
        <div className="max-w-[600px] space-y-3">
          <h2 className="text-3xl font-black">Quem Somos</h2>
          <p className="text-muted font-light">
            No Sanctuarium, nossos especialistas em cortes e tatuagens estão
            prontos para transformar sua aparência e celebrar sua autenticidade.
          </p>
        </div>

        <h3 className="text-2xl font-bold">Nossos colaboradores</h3>
        <div className="dark flex gap-x-3 overflow-auto">
          <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/barbeiro.jpg"
              alt="Barbeiro"
              width={280}
              height={450}
              loading="lazy"
              aria-label='Foto de perfil do colaborador "Robertinho"'
              className="object-cover object-center inset-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-bold text-foreground">Robertinho</h3>
              <span className="text-muted font-light">Barbeiro</span>
            </div>
          </div>

          <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/tatuadora.jpg"
              alt="Tatuadora"
              width={280}
              height={450}
              loading="lazy"
              aria-label='Foto de perfil do colaborador "Evelyn"'
              className="object-cover object-center inset-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-bold text-foreground">Evelyn</h3>
              <span className="text-muted font-light">Tatuadora</span>
            </div>
          </div>

          <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/barbeiro.jpg"
              alt="Barbeiro"
              width={280}
              height={450}
              loading="lazy"
              aria-label='Foto de perfil do colaborador "Robertinho"'
              className="object-cover object-center inset-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-bold text-foreground">Robertinho</h3>
              <span className="text-muted font-light">Barbeiro</span>
            </div>
          </div>

          <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/tatuadora.jpg"
              alt="Tatuadora"
              width={280}
              height={450}
              loading="lazy"
              aria-label='Foto de perfil do colaborador "Evelyn"'
              className="object-cover object-center inset-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-bold text-foreground">Evelyn</h3>
              <span className="text-muted font-light">Tatuadora</span>
            </div>
          </div>

          <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/barbeiro.jpg"
              alt="Barbeiro"
              width={280}
              height={450}
              loading="lazy"
              aria-label='Foto de perfil do colaborador "Robertinho"'
              className="object-cover object-center inset-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-bold text-foreground">Robertinho</h3>
              <span className="text-muted font-light">Barbeiro</span>
            </div>
          </div>

          <div className="relative min-w-[280px] h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/tatuadora.jpg"
              alt="Tatuadora"
              width={280}
              height={450}
              loading="lazy"
              aria-label='Foto de perfil do colaborador "Evelyn"'
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
  );
};
