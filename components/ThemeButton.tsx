'use client';

import { MoonIcon, SunIcon } from './Icons';

const KEY = 'vs-theme';

function currentTheme() {
  const root = document.documentElement;
  const set = root.getAttribute('data-theme');
  if (set) return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeButton() {
  function toggle() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  }

  return (
    <button className="theme-btn" type="button" aria-label="Switch light or dark theme" onClick={toggle}>
      <SunIcon />
      <MoonIcon />
    </button>
  );
}

// Runs before first paint (inlined in <head>) so a saved theme never flashes.
export const themeInitScript = `try{var t=localStorage.getItem('${KEY}');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;
