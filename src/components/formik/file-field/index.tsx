import InputFile, {
  Props as InputFileProps,
} from "@/components/form/input-file";
import { useField } from "formik";

interface Props extends Omit<InputFileProps, "onChange"> {
  label: string;
}

export default function FileField({ label, id, ...props }: Props) {
  const [field, meta, { setValue }] = useField<FileList>(props);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setValue(files);
    }
  };

  return (
    <>
      <label htmlFor={id} className="mb-[-1.5rem]">
        {label}
      </label>
      <InputFile {...field} {...props} id={id} onChange={handleChange} />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </>
  );
}
