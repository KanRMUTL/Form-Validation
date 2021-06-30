import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";
import { TextField } from "@material-ui/core";
import Adaptfield from "./AdaptField";

interface InitialValues {
  email?: string;
  password?: string;
}

const FormSchema = Yup.object().shape({
  email: Yup.string().min(10).max(30).required("Email is required"),
  password: Yup.string().min(6, "Password must be 6 characters"),
});

const initialValues: InitialValues = { email: "", password: "" };
const InputText = Adaptfield(TextField);

const FormUi = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field component={InputText} type="email" name="email" />
          <ErrorMessage name="email" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormUi;
