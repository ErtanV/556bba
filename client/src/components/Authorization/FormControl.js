import { useAuthStyles } from "./style";
import { RedirectButton } from "./Buttons";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const SwitchForm = ({ href, to, message, name }) => {
  const classes = useAuthStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      className={classes.topBoxTextBtn}
      item
    >
      <Typography className={classes.textTop}>{message}</Typography>
      <Link href={href} to={to} className={classes.link}>
        <RedirectButton name={name} />
      </Link>
    </Grid>
  );
};

export const Label = ({ name }) => {
  const classes = useAuthStyles();

  return <Typography className={classes.label}>{name}</Typography>;
};
