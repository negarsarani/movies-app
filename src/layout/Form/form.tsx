import Input from '../../components/Input';
import Select from '../../components/InputSelect';
import Textarea from '../../components/textarea';
import {useFormContext} from "../../context/formContext"
const Form = () => {
  console.log(useFormContext());
  
  return (
    <form onSubmit={() => {}} className="flex gap-10">
      <div className='w-6/12 flex flex-col gap-5'>
        <div className='flex gap-10'>
          <Input
            label="نام فیلم"
            name="movie"
            type="text"
            onChange={() => {
              
            }}
            value=""
            placeholder="نام فیلم را بنویسید"
            error=""
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
        <div className='flex gap-10'>
          <Input
            label="کارگردان"
            name="creator"
            type="text"
            onChange={() => {
              's';
            }}
            value=""
            placeholder="نام کارگردان را وارد کنید"
            error=""
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
      <div className='w-6/12'>
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
