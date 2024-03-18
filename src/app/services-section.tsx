import { CoverCard } from '@/components/ui/CoverCard';

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="space-y-3 py-4 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <h2 className="text-3xl font-black">Serviços</h2>

      <div className="flex gap-3 justify-evenly flex-wrap">
        <CoverCard.Root className="w-60 h-60">
          <CoverCard.Image name="Cortes de Cabelo" src="/images/haircut.jpg" />
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
