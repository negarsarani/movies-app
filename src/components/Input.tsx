import { InputType } from '../types/type';

const Input = ({
  type,
  name,
  placeholder,
  value,
  error,
  onChange,
  label
}: InputType) => {
  return (
    <div className='flex-col flex w-40 items-start justify-center gap-2'>
        <label htmlFor="">{label}</label>
      <input
        className="border outline-yellow-600 "
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error !== '' ? <p className="text-red-500"></p> : null}
    </div>
  );
};

export default Input;
