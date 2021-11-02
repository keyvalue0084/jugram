import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useUserDispatch } from "../context/UserContext";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

import { createStyles, withStyles, WithStyles } from "@mui/styles";
import { login, NewUser } from "../hooks/Users";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = createStyles({
  button: {
    marginTop: 10,
    width: "100%"
  }
});

interface Props extends WithStyles<typeof styles> {}

function SignIn(props: Props) {
  const { classes } = props;

  const history = useHistory();

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
    login(newUser).then(response => {
      toast.success("로그인 성공!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        onClose: () => {
          userDispatch({
            type: "LOGIN",
            user: response.data.user,
            jwt: response.data.jwt
          });
          history.push("/");
        }
      });
    });
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
      <ToastContainer />
      <Typography gutterBottom variant="h4" align="center">
        Sign in to JUGRAM!
      </Typography>

      <Divider />
      <form name="signInForm">
        <TextField
          id="email-outlined-uncontrolled"
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
          id="password-outlined-uncontrolled"
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              className={classes.button}
              color="primary"
              onClick={doSignIn}
            >
              SIGN IN
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              className={classes.button}
              color="success"
              href="/entry/signup"
            >
              SIGN UP
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              className={classes.button}
              color="secondary"
              href="/"
            >
              CANCEL
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              startIcon={<GoogleIcon />}
              variant="outlined"
              fullWidth
              onClick={() =>
                (window.location.href =
                  "https://jsbackend.herokuapp.com/connect/google")
              }
            >
              Login with Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

SignIn.defaultProps = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
