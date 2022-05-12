import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { useAuthStyles } from "./style";
import { ImageConverse } from "./ImageConverse";
import { SubmitButton } from "./Buttons";
import { SwitchForm } from "./FormControl";
import FormInput from "./FormInput";

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useAuthStyles();

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
      <Grid container direction="column" className={classes.dataContainer}>
        <SwitchForm
          message={"Don't have an account?"}
          href={"/register"}
          to={"/register"}
          name={"Create account"}
        />
        <Grid
          container
          justifyContent="center"
          className={classes.formContainer}
        >
          <form onSubmit={handleLogin}>
            <Grid container direction="column">
              <Grid>
                <Typography
                  className={classes.header}
                  component="h2"
                  variant="h5"
                >
                  Welcome back!
                </Typography>
              </Grid>
              <FormInput
                labelName={"E-mail address"}
                aria={"e-mail address"}
                name={"email"}
                type={"email"}
              />
              <FormInput
                labelName={"Password"}
                aria={"password"}
                name={"password"}
                type={"password"}
              />
              <Grid container item justifyContent="space-around">
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
