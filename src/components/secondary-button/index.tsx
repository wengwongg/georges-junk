interface Props {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton({ text, onClick }: Props) {
  return (
    <button className="btn btn-secondary shadow" onClick={onClick}>
      {text}
    </button>
  );
}
