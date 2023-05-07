import Input from "../../components/Input";
import Textarea from "../../components/textarea";


const Form = () => {
  return (
    <form onSubmit={() => {}}>
      <Input
        label="نام فیلم"
        name="movie"
        type="text"
        onChange={()=>{"s"}}
        value=""
        placeholder="نام فیلم را بنویسید"
        error=""
      />
      <Input
        label="کارگردان"
        name="creator"
        type="text"
        onChange={()=>{"s"}}
        value=""
        placeholder="نام کارگردان را وارد کنید"
        error=""
      />
      <Input
        label="سال تولید "
        name="yaer"
        type="text"
        onChange={()=>{"s"}}
        value=""
        placeholder="نام ساخت فیلم را وارد کنید"
        error=""
      />
      <Textarea
        label="توضیحات"
        name="desc"
        onChange={()=>{"s"}}
        value=""
        placeholder=""
        error=""
      />
    </form>
  );
};

export default Form;
