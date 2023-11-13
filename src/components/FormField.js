import React from "react";
import { Formik, Field, Form } from 'formik';
const FormField=({name})=>{
    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <br />
            <Field id={name} name={name} placeholder="" />
        </div>
    )
}

export default FormField;