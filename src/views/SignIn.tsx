import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useUserState, useUserDispatch } from "../context/UserContext";
import PropTypes, { string } from "prop-types";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import { createStyles, withStyles, WithStyles } from "@mui/styles";
import { login, NewUser, UserAxiosReponse } from "../hooks/Users";
import { AxiosResponse } from "axios";

const styles = createStyles({
  button: {
    margin: 10
  }
});

export interface Props extends WithStyles<typeof styles> {}

function SignIn(props: Props) {
  const { classes } = props;

  const history = useHistory();
  const userState = useUserState();
  const userDispatch = useUserDispatch();

  const [newUser, setUser] = useState<NewUser>({
    password: "",
    username: "",
    email: "",
    provider: "email",
    resetPasswordToken: undefined,
    confirmationToken: undefined,
    confirmed: false,
    blocked: false,
    role: undefined,
    created_by: undefined,
    updated_by: undefined
  });

  const doSignIn = () => {
    let loginCallback = (reponse: UserAxiosReponse) => {
      userDispatch({
        type: "LOGIN",
        user: reponse.data.user,
        jwt: reponse.data.jwt
      });

      history.push("/");
    };

    login(newUser, loginCallback);
  };

  //입력값 state 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...newUser,
      [name]: value
    });
  };

  return (
    <Box
      pl={"30%"}
      pr={"30%"}
      pt={30}
      style={{
        minHeight: "70vh",
        overflow: "auto",
        maxWidth: "500px"
      }}
    >
      <Typography gutterBottom variant="h4" align="center">
        Sign in to JUGRAM!
      </Typography>
      <Divider />
      <form name="signInForm">
        <TextField
          id="outlined-uncontrolled"
          label="USER NAME"
          name="username"
          placeholder="ENTER YOUR NAME"
          fullWidth
          margin="normal"
          variant="outlined"
          defaultValue={newUser.username}
          onChange={onChange}
        />
        <TextField
          id="outlined-uncontrolled"
          label="EMAIL"
          name="email"
          placeholder="ENTER YOUR ID"
          fullWidth
          margin="normal"
          variant="outlined"
          defaultValue={newUser.email}
          onChange={onChange}
        />
        <TextField
          id="outlined-uncontrolled"
          label="PASSWORD"
          name="password"
          placeholder="ENTER YOUR PASSWORD"
          fullWidth
          type="password"
          margin="normal"
          variant="outlined"
          defaultValue={newUser.password}
          onChange={onChange}
        />
        <Box textAlign="center">
          <Button
            variant="outlined"
            className={classes.button}
            color="primary"
            onClick={doSignIn}
          >
            SIGN IN
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="success"
            href="/entry/signup"
          >
            SIGN UP
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="secondary"
          >
            CANCEL
          </Button>
        </Box>
      </form>
    </Box>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SignIn);
