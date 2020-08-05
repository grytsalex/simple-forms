import React, {useCallback} from 'react';
import { useFormik } from 'formik';
import { validationSchema }  from './validationSchema';
import '../../../App.css';

export const  FormikForm = () => {

    const formSubmit = () => {
        alert("Validation succeeded!")
    }

    const onKeyPress = useCallback(
        event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                formSubmit();
            }
        },
        [],
    );

    const formik = useFormik({
        initialValues: {
            gmail: '',
            firstName: '',
            lastName: '',
            phone: '',
        },
        validationSchema: { validationSchema },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="formik-form">
            <label htmlFor="e-mail">Email Address </label>
            <input
                id="gmail"
                name="gmail"
                type="gmail"
                onChange={formik.handleChange}
                value={formik.values.gmail}
                required="required"
            />
            <label htmlFor="firstName">First name</label>
            <input
                id="firstName"
                name="firstName"
                type="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                required="required"
            />
            <label htmlFor="lastName">Last name</label>
            <input
                id="lastName"
                name="lastName"
                type="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                required="required"
            />
            <label htmlFor="phoneNumber">Phone number</label>
            <input
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onKeyPress={onKeyPress}
            />
            <button type="submit">Submit</button>
        </form>
    );
};