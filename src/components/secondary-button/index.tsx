interface Props {
  text: string;
  onClick?: () => void;
}

export default function SecondaryButton({ text, onClick }: Props) {
  return (
    <button
      className="btn btn-secondary bg-violet-400 border-violet-950 hover:border-violet-950 hover:bg-violet-500 text-black shadow"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
