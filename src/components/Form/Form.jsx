import React from 'react'
import { MyForm, MyFormWithWatch, FormWithTrigger } from './ReactFormHook/ReactFormHook.jsx';
import { FormikForm } from './Formik/FormikForm.jsx';

export const Form = () => {
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