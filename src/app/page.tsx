import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Schedule from '@/components/Schedule';
import JoinButton from '@/components/JoinButton';

export default function Home() {
  return (
    <div>
      <Intro />
      <Schedule />
      <Projects />
      <JoinButton />
    </div>
  );
}
