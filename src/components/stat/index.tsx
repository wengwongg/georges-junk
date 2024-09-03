interface Props {
  title: string;
  value: string;
  description: string;
}

export default function Stat({ title, value, description }: Props) {
  return (
    <div className="stat bg-neutral-100">
      <div className="stat-title text-black">{title}</div>
      <div className="stat-value animate-rainbow-text">{value}</div>
      <div className="stat-desc text-black">{description}</div>
    </div>
  );
}
