import { Collaborators } from '@/config/collaborators';
import { Sanctuarium } from '@/config/sanctuarium';

import { CoverCard } from '@/components/ui/CoverCard';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="space-y-3 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <div className="max-w-[600px] space-y-3">
        <h2 className="text-3xl font-black">{Sanctuarium.about.name}</h2>
        <p className="text-muted font-light">{Sanctuarium.about.description}</p>
      </div>

      <h3 className="text-2xl font-bold">Nossos colaboradores</h3>
      <div className="flex gap-x-3 overflow-auto">
        {Collaborators.map((collaborator) => (
          <CoverCard.Root
            key={collaborator.name}
            className=" min-w-[280px] h-[450px]"
          >
            <CoverCard.Image
              name={collaborator.name}
              src={collaborator.image}
            />
            <CoverCard.Gradient />
            <CoverCard.Content>
              <CoverCard.Title>{collaborator.name}</CoverCard.Title>
              <CoverCard.Description>
                {collaborator.office}
              </CoverCard.Description>
            </CoverCard.Content>
          </CoverCard.Root>
        ))}
      </div>
    </section>
  );
};
