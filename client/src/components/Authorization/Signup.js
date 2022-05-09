import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { useStyles } from "./style";
import { ImageConverse } from "./ImageConverse";
import { Input } from "./Input";
import { SubmitButton } from "./Buttons";
import { SwitchForm } from "./FormControl";
import { Label } from "./FormControl";

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid className={classes.autorizationContainer}>
      <ImageConverse />
      <Grid className={classes.dataContainer}>
        <SwitchForm
          message={"Already have an account?"}
          href={"/login"}
          to={"/login"}
          name={"Login"}
        />
        <Grid className={classes.formContainer}>
          <form onSubmit={handleRegister}>
            <Grid className={classes.inputCard}>
              <Grid>
                <Typography
                  className={classes.header}
                  component="h2"
                  variant="h5"
                >
                  Create an account.
                </Typography>
                <FormControl>
                  <Label name={"Username"} />
                  <Input aria={"username"} name={"username"} type={"text"} />
                </FormControl>
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
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <Label name={"Password"} />
                  <Input
                    aria={"password"}
                    name={"password"}
                    type={"password"}
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid className={classes.submitButton}>
                <SubmitButton name={"Create"} />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
