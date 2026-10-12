'use client';

import { useEffect, useState } from 'react';

// Index of the section whose top has passed `line` (a fraction of viewport height).
// At the very bottom of the page the last section wins, since short sections never reach the line.
export function useActiveSection(ids: string[], line: number) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let queued = false;
    const update = () => {
      queued = false;
      const y = window.innerHeight * line;
      let current = 0;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= y) current = i;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids.length - 1;
      setActive(current);
    };
    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    update();
    return () => {
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
    };
  }, [ids, line]);

  return active;
}

export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
  history.replaceState(null, '', `#${id}`);
}
