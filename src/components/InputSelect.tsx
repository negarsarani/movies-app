import { InputType } from '../types/type';

const Input = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  label,
  option,
}: InputType) => {
  return (
    <div className="flex-col flex w-40 items-start justify-center gap-2">
      <label htmlFor="">{label}</label>
      <select
        className="border outline-yellow-600 "
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {option.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      {error !== '' ? <p className="text-red-500"></p> : null}
    </div>
  );
};

export default Input;
