import { MobileNav } from './SectionNav';
import ThemeButton from './ThemeButton';

export default function MobileBar() {
  return (
    <header className="mbar">
      <a className="mbar-name" href="#summary">
        Vineet Shah
      </a>
      <MobileNav />
      <ThemeButton />
    </header>
  );
}
