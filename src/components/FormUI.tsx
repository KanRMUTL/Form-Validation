import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Typography } from "@material-ui/core";

interface InitialValues {
  email?: string;
  password?: string;
}

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Too short!")
    .max(10, "Too long!")
    .required("Email is required"),
});

const initialValues: InitialValues = { email: "", password: "" };

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
          <Field type="email" name="email" />
          <ErrorMessage
            name="email"
            render={(msg) => <Typography color="secondary">{msg}</Typography>}
          />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormUi;
