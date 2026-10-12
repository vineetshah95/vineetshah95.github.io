import { Fragment } from 'react';
import { projects } from '@/data/content';
import SectionHead from './SectionHead';
import Tags from './Tags';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="proj-h">
      <SectionHead id="proj-h" title="Projects" note="built outside work" />
      <div className="projects">
        {projects.map((p) => (
          <article className="proj" key={p.name}>
            <h3>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h3>
            <p className="why">{p.why}</p>
            {p.shot && (
              <figure className="shot">
                <img src={p.shot.src} alt={p.shot.alt} loading="lazy" width={p.shot.width} height={p.shot.height} />
              </figure>
            )}
            <p className="what">{p.what}</p>
            <div className="meta">
              <span className="mono">{p.year}</span>
              {p.href ? (
                <a className="mono" href={p.href} target="_blank" rel="noopener">
                  view code ↗
                </a>
              ) : (
                <span className="mono">private repo</span>
              )}
            </div>
            {p.flow && (
              <ul className="flow" aria-label="How it works">
                {p.flow.map((step, i) => (
                  <Fragment key={step}>
                    {i > 0 && (
                      <li className="arrow" aria-hidden="true">
                        →
                      </li>
                    )}
                    <li>{step}</li>
                  </Fragment>
                ))}
              </ul>
            )}
            <Tags items={p.tags} />
          </article>
        ))}
      </div>
    </section>
  );
}
