import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from '../components/FormField';
import FormButton from '../components/FormButton';
export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          address: '',
          name: '',
          EvAdres: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <FormField name="address" />
          <FormField name="name" />
          <FormField name="EvAdres" />
          <br />
          <FormButton butonName='Submit' />
        </Form>
      </Formik>
    </div>
  );
}
