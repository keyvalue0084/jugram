import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserState, useUserDispatch } from "../context/UserContext";
import { toast, ToastContainer } from "react-toastify";

import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import { createStyles, withStyles, WithStyles } from "@mui/styles";
import { addUser, NewUser } from "../hooks/Users";

interface Valid {
  passwordConfirm?: string;
  passwordOk: boolean;
}

const styles = createStyles({
  button: {
    marginTop: 10,
    width: "100%"
  }
});

interface Props extends WithStyles<typeof styles> {}

function SignUp(props: Props) {
  const { classes } = props;
  const history = useHistory();

  const [valid, setValid] = useState<Valid>({
    passwordConfirm: undefined,
    passwordOk: true
  });

  const [newUser, setUser] = useState<NewUser>({
    password: undefined,
    username: "",
    email: "",
    provider: undefined,
    resetPasswordToken: undefined,
    confirmationToken: undefined,
    confirmed: false,
    blocked: false,
    role: undefined,
    created_by: undefined,
    updated_by: undefined
  });

  const doSignUp = () => {
    if (checkValidation()) {
      addUser(newUser)
        .then(response => {
          toast.success("회원가입 성공!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
            onClose: () => {
              history.push("/");
            }
          });
        })
        .catch(error => {
          if (error.response) {
            toast.error(error.response.data.message[0].messages[0].message, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500
            });
          }
        });
    }
  };

  //비밀번호 확인 비교
  const comparePassword = () => {
    const passwordValid =
      newUser.password === valid.passwordConfirm ? true : false;
    return passwordValid;
  };

  //유효성 체크
  const checkValidation = () => {
    let passwordValid = comparePassword();

    setValid({
      passwordOk: passwordValid
    });

    if (!passwordValid) {
      toast.error("Please Confirm Your Password", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
      return false;
    }

    return true;
  };

  //입력값 state 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...newUser,
      [name]: value
    });
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValid({
      ...valid,
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
        Sign up to JUGRAM!
      </Typography>
      <Typography gutterBottom variant="h6" align="center">
        Welcome to JUGRAM
      </Typography>
      <Typography gutterBottom variant="h6" align="center">
        Join is Free~!
      </Typography>
      <Divider />
      <TextField
        id="email-textfield"
        name="email"
        label="EMAIL"
        placeholder="ENTER YOUR EMAIL"
        fullWidth
        margin="normal"
        variant="outlined"
        defaultValue={newUser.email}
        onChange={onChange}
      />
      <TextField
        id="password-textfield"
        name="password"
        label="PASSWORD"
        placeholder="ENTER YOUR PASSWORD"
        fullWidth
        type="password"
        margin="normal"
        variant="outlined"
        defaultValue={newUser.password}
        onChange={onChange}
      />
      <TextField
        id="password-confirm-textfield"
        name="passwordConfirm"
        label="PASSWORD CONFIRM"
        placeholder="CONFIRM YOUR PASSWORD"
        fullWidth
        type="password"
        margin="normal"
        variant="outlined"
        defaultValue={valid.passwordConfirm}
        onChange={onChangePasswordConfirm}
        error={valid.passwordOk === true ? false : true}
        helperText={valid.passwordOk === true ? "" : "Confirm your password"}
      />
      <TextField
        id="username-textfield"
        name="username"
        label="USER NAME"
        placeholder="ENTER YOUR NAME"
        fullWidth
        margin="normal"
        variant="outlined"
        defaultValue={newUser.username}
        onChange={onChange}
      />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button
            variant="outlined"
            className={classes.button}
            color="success"
            onClick={doSignUp}
          >
            SIGN UP
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            className={classes.button}
            color="secondary"
            href="/"
          >
            CANCEL
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

SignUp.defaultProps = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
