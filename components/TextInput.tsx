import { useField } from "remix-validated-form";

type NormalInputProps = {
  name: string;
  placeholder: string;
  label: string;
};

export const NormalInput = ({ name, placeholder, label }: NormalInputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input w-full max-w-xs"
        {...getInputProps({ id: name })}
      />
      {error && <span className="my-error-class">{error}</span>}
    </div>
  );
};
