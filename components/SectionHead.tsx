export default function SectionHead({ id, title, note }: { id?: string; title: string; note?: string }) {
  return (
    <div className="sec-head">
      <h2 id={id}>{title}</h2>
      {note && <span className="label">{note}</span>}
    </div>
  );
}
