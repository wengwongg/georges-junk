interface Props {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton({ text, onClick }: Props) {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {text}
    </button>
  );
}
