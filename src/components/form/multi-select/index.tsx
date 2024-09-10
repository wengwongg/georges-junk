export interface Option {
  value: string;
  label: string;
}

export interface Props {
  options: Option[];
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function MultiSelect({ options, name, id, onChange }: Props) {
  return (
    <select
      className="select select-bordered"
      name={name}
      id={id}
      onChange={onChange}
      multiple
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
