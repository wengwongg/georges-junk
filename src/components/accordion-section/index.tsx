interface Props {
  title: string;
  content: string;
}

export default function AccordianSection({ title, content }: Props) {
  return (
    <div className="collapse collapse-arrow shadow bg-neutral-100">
      <input type="radio" name="accordian" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
