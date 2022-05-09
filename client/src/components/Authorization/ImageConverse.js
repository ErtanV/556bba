import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./style";

export const ImageConverse = () => {
  const classes = useStyles();

  return (
    <Grid item={true} className={classes.imageContainer}>
      <Grid container item={true} className={classes.textChat}>
        <Grid className={classes.textChatImage}></Grid>
        <Typography className={classes.converse}>
          Converse with anyone with any language
        </Typography>
      </Grid>
    </Grid>
  );
};
