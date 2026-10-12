import { profile } from '@/data/content';
import CopyEmail from './CopyEmail';
import SectionHead from './SectionHead';

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <SectionHead title="Contact" />
      <p className="summary">The quickest way to reach me is email. I&apos;m also on LinkedIn and GitHub.</p>
      <div className="email">
        <code>{profile.email}</code>
        <CopyEmail email={profile.email} label="Copy email" />
      </div>
      <div className="end mono">
        <span>© {new Date().getFullYear()} Vineet Shah</span>
        <span>Boston area</span>
      </div>
    </footer>
  );
}
