interface Props {
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function SecondaryButton({ text, onClick, size }: Props) {
  return (
    <button
      className={`btn btn-secondary shadow ${size && `btn-${size}`}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
