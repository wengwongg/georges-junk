interface Props {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton({ text, onClick }: Props) {
  return (
    <button
      className="btn btn-primary bg-amber-400 border-amber-950 hover:bg-amber-500 hover:border-amber-950 text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
