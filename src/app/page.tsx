import { AboutSection } from '../components/about';
import { GallerySection } from '../components/gallery';
import { SanctuariumSection } from '../components/sanctuarium';
import { SchedulesSection } from '../components/schedules';
import { ServicesSection } from '../components/services';

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
