import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { useAuthStyles } from "./style";
import { ImageConverse } from "./ImageConverse";
import { Input } from "./Input";
import { SubmitButton } from "./Buttons";
import { SwitchForm } from "./FormControl";
import { Label } from "./FormControl";
import FormInput from "./FormInput";

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useAuthStyles();

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
      <Grid container direction="column" className={classes.dataContainer}>
        <SwitchForm
          message={"Already have an account?"}
          href={"/login"}
          to={"/login"}
          name={"Login"}
        />
        <Grid
          container
          justifyContent="center"
          className={classes.formContainer}
        >
          <form onSubmit={handleRegister}>
            <Grid container direction="column">
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

              <FormInput
                labelName="E-mail address"
                aria="e-mail address"
                name="email"
                type="email"
              />
              <FormInput
                helperText={!!formErrorMessage.confirmPassword}
                labelName={"Password"}
                aria={"password"}
                name={"password"}
                type={"password"}
              >
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
                ;
              </FormInput>
              <Grid container item justifyContent="space-around">
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
