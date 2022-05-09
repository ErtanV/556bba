import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, FormControl } from "@material-ui/core";
import { useStyles } from "./style";
import { ImageConverse } from "./ImageConverse";
import { Input } from "./Input";
import { SubmitButton } from "./Buttons";
import { SwitchForm } from "./FormControl";
import { Label } from "./FormControl";

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid className={classes.autorizationContainer}>
      <ImageConverse />
      <Grid className={classes.dataContainer}>
        <SwitchForm
          message={"Don't have an account?"}
          href={"/register"}
          to={"/register"}
          name={"Create account"}
        />
        <Grid className={classes.formContainer}>
          <form onSubmit={handleLogin}>
            <Grid className={classes.inputCard}>
              <Grid>
                <Typography
                  className={classes.header}
                  component="h2"
                  variant="h5"
                >
                  Welcome back!
                </Typography>
              </Grid>
              <Grid>
                <FormControl>
                  <Label name={"E-mail address"} />
                  <Input
                    aria={"e-mail address"}
                    name={"email"}
                    type={"email"}
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <Label name={"Password"} />
                  <Input
                    aria={"password"}
                    name={"password"}
                    type={"password"}
                  />
                </FormControl>
              </Grid>
              <Grid className={classes.submitButton}>
                <SubmitButton name={"Login"} />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
