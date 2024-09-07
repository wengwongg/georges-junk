interface Props {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton({ text, onClick }: Props) {
  return (
    <button
      className="btn btn-primary bg-sky-400 border-sky-950 hover:bg-sky-500 hover:border-sky-950 text-black shadow"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
