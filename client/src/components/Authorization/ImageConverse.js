import { Grid, Typography } from "@material-ui/core";
import { useAuthStyles } from "./style";

export const ImageConverse = () => {
  const classes = useAuthStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      item
      className={classes.imageContainer}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        item
        className={classes.textChat}
      >
        <Grid className={classes.textChatImage}></Grid>
        <Typography className={classes.converse}>
          Converse with anyone with any language
        </Typography>
      </Grid>
    </Grid>
  );
};
