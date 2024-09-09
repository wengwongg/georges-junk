interface Props {
  text: string;
  onClick?: () => void;
  submit?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({ text, onClick, submit, size }: Props) {
  return (
    <button
      className={`btn btn-primary shadow ${size && `btn-${size}`}`}
      onClick={onClick}
      type={submit ? "submit" : undefined}
    >
      {text}
    </button>
  );
}
