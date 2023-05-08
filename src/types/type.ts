export type InputType = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
  label: string;
  onChange: (value: string , name:string) => void;
};
export type SelectType = {
  name: string;
  value: string;
  error: string;
  label: string;
  onChange: (value: string) => void;
  option: [] | string[]
};

export type TextareaType = {
  placeholder: string;
  name: string;
  value: string;
  error: string;
  label: string;
  onChange: (value: string , name:string) => void;
};
export type FormContextType = {
  info: info;
  errors: errors;
};

interface info {
  movie: string;
  genre: string;
  director: string;
  year: string | number;
  description: string;
}
interface errors {
  movie?: string;
  genre?: string;
  director?: string;
  year?: string | number;
  description?: string;
}
export interface ActionType {
  type: 'movie' | 'genre' | 'director' | 'year' | 'description';
  payload: {value: info , errors: errors};
}
export interface validationFormType {
  name: 'movie' | 'genre' | 'director' | 'year' | 'description';
}
