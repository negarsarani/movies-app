import { createContext, ReactNode, useReducer, useContext } from 'react';
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
      return {
        ...state,
        info: {
          ...state.info,
          movie: action.payload.value,
        },
        errors: action.payload.errors 
      }

    // return { ...state, errors: {   };

    case 'genre':
      // rest of code
      break;
    case 'director':
      return {
        ...state,
        info: {
          ...state.info,
          director: action.payload.value,
        },
        errors: action.payload.errors 
      };
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
