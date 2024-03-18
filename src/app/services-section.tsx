import { Services } from '@/config/sanc-services';

import { CoverCard } from '@/components/ui/CoverCard';

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="space-y-3 py-4 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <h2 className="text-3xl font-black">{Services.name}</h2>

      <div className="flex gap-2 md:gap-6 justify-evenly flex-wrap">
        {Services.services.map((service) => (
          <CoverCard.Root
            key={service.name}
            className="w-[170px] h-[170px] sm:w-[230px] sm:h-[230px] md:w-[300px] md:h-[300px]"
          >
            <CoverCard.Image name="Cortes de Cabelo" src={service.image} />
            <CoverCard.Gradient />
            <CoverCard.Content>
              <CoverCard.Title>{service.name}</CoverCard.Title>
              <CoverCard.Description>
                {service.description}
              </CoverCard.Description>
            </CoverCard.Content>
          </CoverCard.Root>
        ))}
      </div>
    </section>
  );
};
