import { CoverCard } from '@/components/ui/CoverCard';

export const ServicesSection = () => {
  return (
    <section
      id="about"
      className="space-y-3 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <h2 className="text-3xl font-black">Serviços</h2>

      <div className="flex gap-3 justify-evenly flex-wrap">
        <CoverCard.Root className="w-72 h-72">
          <CoverCard.Image name="Cortes de Cabelo" src="/images/haircut.webp" />
          <CoverCard.Gradient />
          <CoverCard.Content>
            <CoverCard.Title>Cabelo</CoverCard.Title>
            <CoverCard.Description>
              Corte de todos os tipos
            </CoverCard.Description>
          </CoverCard.Content>
        </CoverCard.Root>
        <CoverCard.Root className="w-72 h-72">
          <CoverCard.Image name="Cortes de Cabelo" src="/images/haircut.webp" />
          <CoverCard.Gradient />
          <CoverCard.Content>
            <CoverCard.Title>Cabelo</CoverCard.Title>
            <CoverCard.Description>
              Corte de todos os tipos
            </CoverCard.Description>
          </CoverCard.Content>
        </CoverCard.Root>
        <CoverCard.Root className="w-72 h-72">
          <CoverCard.Image name="Cortes de Cabelo" src="/images/haircut.webp" />
          <CoverCard.Gradient />
          <CoverCard.Content>
            <CoverCard.Title>Cabelo</CoverCard.Title>
            <CoverCard.Description>
              Corte de todos os tipos
            </CoverCard.Description>
          </CoverCard.Content>
        </CoverCard.Root>
        <CoverCard.Root className="w-72 h-72">
          <CoverCard.Image name="Cortes de Cabelo" src="/images/haircut.webp" />
          <CoverCard.Gradient />
          <CoverCard.Content>
            <CoverCard.Title>Cabelo</CoverCard.Title>
            <CoverCard.Description>
              Corte de todos os tipos
            </CoverCard.Description>
          </CoverCard.Content>
        </CoverCard.Root>
      </div>
    </section>
  );
};
