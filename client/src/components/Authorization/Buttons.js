import { Button } from "@material-ui/core";
import { useStyles } from "./style";

export const SubmitButton = ({ name }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.submitBtn}
      type="submit"
      variant="contained"
      size="large"
    >
      {name}
    </Button>
  );
};

export const RedirectButton = ({ name }) => {
  const classes = useStyles();

  return <Button className={classes.redirectBtn}>{name}</Button>;
};
