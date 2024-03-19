import { Metadata } from 'next';

import { Sanctuarium } from '@/config/sanctuarium';

import { AboutSection } from './about-section';
import { GallerySection } from './gallery-section';
import { SanctuariumSection } from './sanctuarium-section';
import { SchedulesSection } from './schedules-section';
import { ServicesSection } from './services-section';

export const metadata: Metadata = {
  openGraph: {
    images: [Sanctuarium.backdrop]
  }
};

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
