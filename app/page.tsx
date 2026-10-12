import Contact from '@/components/Contact';
import { Certifications, Education, Publication, Skills, Summary } from '@/components/Details';
import Experience from '@/components/Experience';
import MobileBar from '@/components/MobileBar';
import Projects from '@/components/Projects';
import Rail from '@/components/Rail';
import Spotlight from '@/components/Spotlight';

export default function Home() {
  return (
    <>
      <Spotlight />
      <a className="skip" href="#summary">
        Skip to content
      </a>
      <MobileBar />
      <div className="wrap">
        <Rail />
        <main>
          <Summary />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Publication />
          <Contact />
        </main>
      </div>
    </>
  );
}
