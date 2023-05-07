import  { SelectType } from '../types/type';

const Select = ({
  name,
  value,
  error,
  onChange,
  label,
  option,
}: SelectType) => {
  return (
    <div className="flex-col flex w-40 items-start justify-center gap-2">
      <label htmlFor="">{label}</label>
      <select
        className="border outline-yellow-600 "
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {option.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      {error !== '' && <p className="text-red-500"></p>}
    </div>
  );
};

export default Select;
