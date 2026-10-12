export default function Tags({ items, className = 'tags' }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
