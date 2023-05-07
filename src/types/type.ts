export type InputType = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  error: string;
  label: string;
  onChange: (value: string) => void;
};
export type SelectType = {
  name: string;
  value: string;
  error: string;
  label: string;
  onChange: (value: string) => void;
  option: [];
};

export type TextareaType = {
  placeholder: string;
  name: string;
  value: string;
  error: string;
  label: string;
  onChange: (value: string) => void;
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
  type:
  | 'movie'
  | 'genre'
  | 'director'
  | 'year'
  | 'description'
  payload: info;
}
