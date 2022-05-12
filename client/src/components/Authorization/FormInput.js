import React from "react";
import { Grid, FormControl, FormHelperText } from "@material-ui/core";
import { Label } from "./FormControl";
import { Input } from "./Input";

const FormInput = ({ aria, name, type, labelName, helperText = false }) => {
  return (
    <Grid item>
      <FormControl error={helperText}>
        <Label name={labelName} />
        <Input aria={aria} name={name} type={type} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  );
};

export default FormInput;
