import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Schedule from '@/components/Schedule';

export default function Home() {
  return (
    <div>
      <Intro />
      <Schedule />
      <Projects />
    </div>
  );
}
