import { useAuthStyles } from "./style";
import { TextField } from "@material-ui/core";

export const Input = ({ aria, type, name }) => {
  const classes = useAuthStyles();

  return (
    <TextField
      className={classes.inputField}
      aria-label={aria}
      type={type}
      name={name}
      required
    />
  );
};
