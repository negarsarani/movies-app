import {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useContext,
} from 'react';
import { ActionType, FormContextType } from '../types/type';

const initialState: FormContextType = {
  info: {
    movie: '',
    genre: '',
    director: '',
    year: '',
    description: '',
  },
  errors: {},
};
const reducer = (state: FormContextType, action: ActionType) => {
  switch (action.type) {
    case 'movie':
      if (action.payload.movie !== '') {
        return { ...state, info: { ...state.info, movie: action.payload } };
      } else {
        state.errors.movie = '';
        return { ...state, errors: { ...state.errors } };
      }
    case 'genre':
      // rest of code
      break;
    case 'director':
      // rest of code
      break;
    case 'year':
      // rest of code
      break;
    default:
      // rest of code
      break;
  }
};
const FormContext = createContext<FormContextType | []>([]);
export function useFormContext() {
  return useContext(FormContext);
}

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, undefined);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
