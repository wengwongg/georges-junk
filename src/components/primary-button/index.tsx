interface Props {
  text: string;
  onClick?: () => void;
  submit?: boolean;
}

export default function PrimaryButton({ text, onClick, submit }: Props) {
  return (
    <button
      className="btn btn-primary shadow"
      onClick={onClick}
      type={submit ? "submit" : undefined}
    >
      {text}
    </button>
  );
}
