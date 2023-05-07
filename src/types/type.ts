export type InputType = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
  label:string;
  onChange: (value: string) => void;
  option?:[]
};
export type SelectType = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
  label:string;
  onChange: (value: string) => void;
  option?:[]
};

