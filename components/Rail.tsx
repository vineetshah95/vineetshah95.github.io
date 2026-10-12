import { profile } from '@/data/content';
import CopyEmail from './CopyEmail';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';
import { RailNav } from './SectionNav';
import ThemeButton from './ThemeButton';

export default function Rail() {
  return (
    <aside className="rail">
      <div className="rail-id">
        <h1 className="name">
          <span>{profile.first}</span>
          <span>{profile.last}</span>
        </h1>
        <p className="role">
          {profile.title} <em>{profile.tagline}</em>
        </p>
        <p className="stackline mono">{profile.stack}</p>
      </div>

      <div className="status" role="status">
        <span className="dot" aria-hidden="true" />
        <span className="mono">
          <b>Open to</b> {profile.openTo}
        </span>
      </div>

      <RailNav />

      <div className="rail-tools">
        <ThemeButton />
      </div>

      <div className="links">
        <a href={profile.github.href} target="_blank" rel="noopener">
          <GitHubIcon />
          <span>{profile.github.label}</span>
        </a>
        <a href={profile.linkedin.href} target="_blank" rel="noopener">
          <LinkedInIcon />
          <span>{profile.linkedin.label}</span>
        </a>
        <div className="email">
          <MailIcon />
          <code>{profile.email}</code>
          <CopyEmail email={profile.email} />
        </div>
      </div>
    </aside>
  );
}
