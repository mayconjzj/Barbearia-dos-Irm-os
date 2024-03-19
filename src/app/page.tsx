import { AboutSection } from './about-section';
import { GallerySection } from './gallery-section';
import { SanctuariumSection } from './sanctuarium-section';
import { SchedulesSection } from './schedules-section';
import { ServicesSection } from './services-section';

export default function Home() {
  return (
    <article className="max-w-[1200px] m-auto">
      <SanctuariumSection />
      <div>
        <AboutSection />
        <ServicesSection />
        <SchedulesSection />
        <GallerySection />
      </div>
    </article>
  );
}
