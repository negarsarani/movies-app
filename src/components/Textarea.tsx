import React from 'react';
import { TextareaType } from '../types/type';

const Textarea = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  label,
}: TextareaType) => {
  <textarea name="" id=""></textarea>;
  return (
    <div className="flex-col flex w-40 items-start justify-center gap-2">
      <label htmlFor="">{label}</label>
      <textarea
      cols={20}
      rows={5}
        className="border outline-yellow-600 "
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
      {error !== '' ? <p className="text-red-500"></p> : null}
    </div>
  );
};

export default Textarea;
