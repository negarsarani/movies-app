import { validationFormType } from '../types/type';

let errorObj = {};
const validationForm = (name: validationFormType, value: string) => {
  switch (name) {
    case 'movie':
        value === ''
        ? (errorObj.movie = 'این فیلد ضروری است')
        : delete errorObj.movie;
      return errorObj;
    case 'genre':
      break;
    case 'director':
      value === ''
        ? (errorObj.director = 'اسم کارگردان را وارد کنید')
        : delete errorObj.director;
      return errorObj;
    case 'year':
      break;
    case 'description':
      break;

    default:
      break;
  }
 
  
};

export default validationForm;
