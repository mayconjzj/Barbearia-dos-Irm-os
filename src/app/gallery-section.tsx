import { Gallery } from '@/config/sanc-gallery';

import { Card } from '@/components/ui/Card';
import { CoverCard } from '@/components/ui/CoverCard';

export const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="space-y-3 py-4 min-h-[100vh] flex flex-col justify-center border-b-[0.5px] border-border"
    >
      <h2 className="text-3xl font-black">{Gallery.name}</h2>

      <div className="flex flex-wrap gap-2 justify-evenly">
        {Gallery.images.map((image) => (
          <Card.Root key={image.name}>
            <CoverCard.Root className="w-[90vw] h-[90vw] max-w-[300px] max-h-[300px]">
              <CoverCard.Image name={image.name} src={image.image} />
            </CoverCard.Root>
          </Card.Root>
        ))}
      </div>
    </section>
  );
};
