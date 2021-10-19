import React, { useState } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { createStyles, withStyles, WithStyles } from "@mui/styles";

import { checkId, addUser, User } from "../hooks/Users";

const styles = createStyles({
  button: {
    margin: 10
  }
});

export interface Props extends WithStyles<typeof styles> {}

function SignUp(props: Props) {
  const { classes } = props;
  const [User, setUser] = useState<User>({
    id: "",
    password: "",
    passwordConfirm: "",
    passwordOk: true,
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
    if (comparePassword()) {
      addUser(User);
    }
  };

  //비밀번호 확인 비교
  const comparePassword = () => {
    if (User.password === User.passwordConfirm) {
      setUser({
        ...User,
        passwordOk: true
      });

      return true;
    } else {
      setUser({
        ...User,
        passwordOk: false
      });

      return false;
    }
  };

  //입력값 state 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...User,
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
        id="id-textfield"
        name="ID"
        label="ID"
        placeholder="ENTER YOUR ID"
        fullWidth
        margin="normal"
        variant="outlined"
        defaultValue={User.id}
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
        defaultValue={User.password}
        onChange={onChange}
        error={User.passwordOk === true ? false : true}
        helperText={User.passwordOk === true ? "" : "Confirm your password"}
      />
      <TextField
        id="id-textfield"
        name="username"
        label="USER NAME"
        placeholder="ENTER YOUR NAME"
        fullWidth
        margin="normal"
        variant="outlined"
        defaultValue={User.username}
        onChange={onChange}
      />
      <TextField
        id="email-textfield"
        name="email"
        label="EMAIL"
        placeholder="ENTER YOUR E-MAIL"
        fullWidth
        margin="normal"
        variant="outlined"
        defaultValue={User.email}
        onChange={onChange}
      />
      <Box textAlign="center">
        <Button
          variant="outlined"
          className={classes.button}
          color="success"
          onClick={doSignUp}
        >
          SIGN UP
        </Button>
        <Button variant="outlined" className={classes.button} color="secondary">
          CANCEL
        </Button>
      </Box>
    </Box>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SignUp);
