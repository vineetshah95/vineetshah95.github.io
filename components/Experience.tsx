import { roles } from '@/data/content';
import SectionHead from './SectionHead';
import Tags from './Tags';

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="highlights">
      {items.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h">
      <SectionHead id="exp-h" title="Experience" />
      <div className="roles">
        {roles.map((r) => (
          <article className="roleblock" id={r.id} key={r.id}>
            <div className="when">
              <span className="label">{r.place}</span>
              <span className="mono">{r.dates}</span>
            </div>
            <div className="role-body">
              <div>
                <h3>
                  <a className="co" href={r.href} target="_blank" rel="noopener">
                    {r.company} ↗
                  </a>
                </h3>
                {r.title && <p className="org">{r.title}</p>}
              </div>
              {r.rungs && (
                <div className="ladder">
                  {r.rungs.map((rung) => (
                    <div className="rung" key={rung.title}>
                      <p className="rung-title">
                        <b>{rung.title}</b>
                        <span className="mono">{rung.dates}</span>
                      </p>
                      <Bullets items={rung.bullets} />
                    </div>
                  ))}
                </div>
              )}
              {r.bullets && <Bullets items={r.bullets} />}
              <Tags items={r.tags} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
