'use client';

import { useEffect, useRef } from 'react';

// Soft cobalt glow that follows the pointer. Fine pointers only, and off for reduced motion.
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const spot = ref.current;
    const root = document.documentElement;
    let x = 0;
    let y = 0;
    let queued = false;

    const paint = () => {
      queued = false;
      root.style.setProperty('--mx', `${x}px`);
      root.style.setProperty('--my', `${y}px`);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      spot?.classList.add('on');
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    };
    const leave = () => spot?.classList.remove('on');

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
