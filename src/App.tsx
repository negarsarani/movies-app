import { FormProvider } from './context/formContext';
import Main from './layout/Main';

function App() {
  return (
    <FormProvider>
      <div className="p-10">
        <Main />
      </div>
    </FormProvider>
  );
}

export default App;
