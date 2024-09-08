export interface Props {
  name: string;
  id: string;
  multiple?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

export default function InputFile({
  name,
  id,
  multiple,
  onChange,
  accept,
}: Props) {
  return (
    <input
      name={name}
      id={id}
      type="file"
      className="file-input file-input-bordered w-full"
      multiple={multiple}
      onChange={onChange}
      accept={accept}
    />
  );
}
