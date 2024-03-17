import { Collaborators } from '@/config/collaborators';
import { Sanctuarium } from '@/config/sanctuarium';

import { CollaboratorProfile } from '@/components/ui/CollaboratorProfile';

export const AboutSection = () => {
  return (
    <section id="about" className="pt-16 space-y-3">
      <div className="max-w-[600px] space-y-3">
        <h2 className="text-3xl font-black">{Sanctuarium.about.name}</h2>
        <p className="text-muted font-light">{Sanctuarium.about.description}</p>
      </div>

      <h3 className="text-2xl font-bold">Nossos colaboradores</h3>
      <div className="dark flex gap-x-3 overflow-auto">
        {Collaborators.map((collaborator) => (
          <CollaboratorProfile.Root key={collaborator.name}>
            <CollaboratorProfile.Image
              name={collaborator.name}
              src={collaborator.image}
            />
            <CollaboratorProfile.Gradient />
            <CollaboratorProfile.Content>
              <CollaboratorProfile.Name>
                {collaborator.name}
              </CollaboratorProfile.Name>
              <CollaboratorProfile.Office>
                {collaborator.office}
              </CollaboratorProfile.Office>
            </CollaboratorProfile.Content>
          </CollaboratorProfile.Root>
        ))}
      </div>
    </section>
  );
};
