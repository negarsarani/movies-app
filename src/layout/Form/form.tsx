import Input from '../../components/Input';
import Select from '../../components/InputSelect';
import Textarea from '../../components/Textarea';
import { useFormContext } from '../../context/formContext';
import validationForm from '../../library/validation';
const Form = () => {
  const { state, dispatch } = useFormContext();
  const handleDispatch = (value: string, name: string) => {
    
    return dispatch({
      type: name,
      payload: {
        value: value,
        errors: validationForm(name, value),
      },
    });
  };
  return (
    <form onSubmit={() => {}} className="flex gap-10">
      <div className="w-6/12 flex flex-col gap-5">
        <div className="flex gap-10">
          <Input
            label="نام فیلم"
            name="movie"
            type="text"
            onChange={(value: string, name:string) => {
              handleDispatch(value, name);
            }}
            
            value={state.info.movie}
            error={state.errors.movie}
            placeholder="نام فیلم را بنویسید"
          />
          <Select
            label="ژانر فیلم"
            name="genre"
            option={['ترسناک', 'بالیوود', 'اکشن', 'جنایی']}
            onChange={() => {
              's';
            }}
            value=""
            error=""
          />
        </div>
        <div className="flex gap-10">
          <Input
            label="کارگردان"
            name="director"
            type="text"
            onChange={(value: string, name:string) => {
              handleDispatch(value, name);
            }}
            
            value={state.info.director}
            error={state.errors.director}
            placeholder="نام کارگردان را وارد کنید"
          />
          <Input
            label="سال تولید "
            name="yaer"
            type="text"
            onChange={() => {
              's';
            }}
            value=""
            placeholder="نام ساخت فیلم را وارد کنید"
            error=""
          />
        </div>
      </div>
      <div className="w-6/12">
        <Textarea
          label="توضیحات"
          name="desc"
          onChange={() => {
            's';
          }}
          value=""
          placeholder="توضیحات درباره فیلم"
          error=""
        />
      </div>
    </form>
  );
};

export default Form;
