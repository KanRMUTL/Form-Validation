import React from "react";
import Form from "./components/FormUI";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container justify="center">
      <Grid item>
        <Form />
      </Grid>
    </Grid>
  );
}

export default App;
