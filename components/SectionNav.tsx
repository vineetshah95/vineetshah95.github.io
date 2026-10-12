'use client';

import { useEffect, useRef } from 'react';
import { sections } from '@/data/content';
import { scrollToSection, useActiveSection } from './useActiveSection';

const ids = sections.map((s) => s.id);

// Vertical nav in the desktop rail.
export function RailNav() {
  const active = useActiveSection(ids, 0.35);
  return (
    <nav aria-label="Sections">
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={i === active ? 'active' : undefined}
              aria-current={i === active ? 'true' : undefined}
              onClick={(e) => scrollToSection(e, s.id)}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Horizontal, scrollable nav in the phone bar. Keeps the active link in view.
export function MobileNav() {
  const active = useActiveSection(ids, 0.3);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.children[active] as HTMLElement | undefined;
    if (!nav || !link) return;
    const left = link.getBoundingClientRect().left - nav.getBoundingClientRect().left + nav.scrollLeft;
    nav.scrollTo({ left: Math.max(0, left - 16), behavior: 'smooth' });
  }, [active]);

  return (
    <nav className="mnav" aria-label="Sections" ref={navRef}>
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={i === active ? 'active' : undefined}
          aria-current={i === active ? 'true' : undefined}
          onClick={(e) => scrollToSection(e, s.id)}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
