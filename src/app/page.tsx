import { AboutSection } from './about-section';
import { SanctuariumSection } from './sanctuarium-section ';

export default function Home() {
  return (
    <article className="max-w-[1200px] m-auto">
      <SanctuariumSection />
      <div>
        <AboutSection />
      </div>
    </article>
  );
}
