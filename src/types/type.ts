export type InputType = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
  label:string;
  onChange: (value: string) => void;
};
export type SelectType = {
  name: string;
  value: string;
  error: string;
  label:string;
  onChange: (value: string) => void;
  option:[]
};

export type TextareaType ={
  placeholder: string;
  name: string;
  value: string;
  error: string;
  label:string;
  onChange: (value: string) => void;
  
}