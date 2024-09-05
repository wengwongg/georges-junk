interface Props {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton({ text, onClick }: Props) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
}
