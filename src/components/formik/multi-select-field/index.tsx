import MultiSelect, {
  Props as MultiSelectProps,
} from "@/components/form/multi-select";
import { useField } from "formik";

interface Props extends Omit<MultiSelectProps, "onChange"> {
  label: string;
}

export default function MultiSelectField({ label, id, ...props }: Props) {
  const [field, meta, { setValue }] = useField<string[]>(props);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    if (selectedOptions) {
      setValue(selectedOptions.map((option) => option.value));
    }
  };

  return (
    <>
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <MultiSelect {...field} {...props} id={id} onChange={handleChange} />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </>
  );
}
