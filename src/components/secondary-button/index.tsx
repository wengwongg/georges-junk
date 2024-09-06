interface Props {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton({ text, onClick }: Props) {
  return (
    <button
      className="btn btn-secondary bg-teal-400 border-teal-950 hover:border-teal-950 hover:bg-teal-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
