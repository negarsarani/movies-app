import { TextField } from '@mui/material';
import { useState } from 'react';
import ValidationTextFields from './components/InputErr';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(0);

  return <div className='p-10'>
   <Input name='movie' error='benevis' label='نام فیلم'/>
  </div>;
}

export default App;
