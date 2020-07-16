import React from 'react';
import './App.css';
import { MyForm, MyFormWithWatch, FormWithTrigger } from './components/ReactFormHook/ReactFormHook.jsx';
import { FormikForm } from './components/Formik/FormikForm.jsx';

function App() {
  return (
    <div className="App">
        <div className="react-hook-form">
            <h3>React-hook-form</h3>
            <div className="form">
                <MyForm/>
            </div>
            <div className="form">
                <MyFormWithWatch/>
            </div>
            <div className="form">
                <FormWithTrigger/>
            </div>
        </div>
        <div className="formik">
            <h3>Formik</h3>
            <FormikForm/>
        </div>
    </div>
  );
}

export default App;
