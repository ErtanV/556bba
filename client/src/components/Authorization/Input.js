import { useStyles } from "./style";
import { TextField } from "@material-ui/core";

export const Input = ({ aria, type, name }) => {
  const classes = useStyles();

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
