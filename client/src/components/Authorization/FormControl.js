import { useStyles } from "./style";
import { RedirectButton } from "./Buttons";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const SwitchForm = ({ href, to, message, name }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.topBoxTextBtn} item={true}>
      <Typography className={classes.textTop}>{message}</Typography>
      <Link href={href} to={to} className={classes.link}>
        <RedirectButton name={name} />
      </Link>
    </Grid>
  );
};

export const Label = ({ name }) => {
  const classes = useStyles();

  return <Typography className={classes.label}>{name}</Typography>;
};
