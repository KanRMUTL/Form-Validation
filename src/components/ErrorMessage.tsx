import React from "react";
import { ErrorMessage as Error } from "formik";
import { Typography } from "@material-ui/core";

interface Props {
  name: string;
}
export default function ErrorMessage({ name }: Props) {
  return (
    <Error name={name}>
      {(msg) => <Typography color="secondary">{msg}</Typography>}
    </Error>
  );
}
