interface Props {
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function NeutralButton({ text, onClick, size }: Props) {
  return (
    <button
      className={`btn btn-neutral shadow ${size && `btn-${size}`}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
