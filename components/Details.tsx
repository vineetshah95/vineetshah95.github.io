import { certifications, education, publication, skills, summary } from '@/data/content';
import SectionHead from './SectionHead';
import Tags from './Tags';

export function Summary() {
  return (
    <section id="summary" aria-label="Summary">
      <p className="lede">
        I like figuring out how things work, and then <mark>making them work better.</mark>
      </p>
      <p className="summary">{summary}</p>
    </section>
  );
}

export function Skills() {
  return (
    <section id="stack" aria-labelledby="stack-h">
      <SectionHead id="stack-h" title="Skills" />
      <div className="skills">
        {skills.map((g) => (
          <div className="skill-group" key={g.group}>
            <p className="label">{g.group}</p>
            <Tags items={g.items} className="chips" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" aria-labelledby="edu-h">
      <SectionHead id="edu-h" title="Education" />
      <div className="two">
        {education.map((e) => (
          <div className="item" key={e.degree}>
            <h3>{e.degree}</h3>
            <p>{e.detail}</p>
            <span className="mono">{e.years}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="cert-h">
      <SectionHead id="cert-h" title="Certifications" />
      <p className="summary">{certifications.intro}</p>
      <ul className="cred-list">
        {certifications.items.map((c) => (
          <li key={c.name}>
            <a href={c.href} target="_blank" rel="noopener">
              {c.name} ↗
            </a>
            <span className="mono">{c.issuer}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Publication() {
  return (
    <section id="publication" aria-labelledby="pub-h">
      <SectionHead id="pub-h" title="Publication" />
      <div className="pub">
        <h3>
          <a href={publication.href} target="_blank" rel="noopener">
            {publication.title} ↗
          </a>
        </h3>
        <p>{publication.blurb}</p>
        <span className="mono pub-venue">{publication.venue}</span>
      </div>
    </section>
  );
}
