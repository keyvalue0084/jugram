import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { createStyles, withStyles, WithStyles } from "@mui/styles";
import { checkId, addUser, NewUser } from "../hooks/Users";


interface Valid  {
  passwordConfirm?:string;
  passwordOk: boolean;
}

const styles = createStyles({
  button: {
    margin: 10
  }
});

export interface Props extends WithStyles<typeof styles> {}

function SignUp(props: Props) {
  const { classes } = props;
  const history = useHistory()
  const [open, setOpen] = React.useState(false);
  const [valid,setValid] = useState<Valid>({
      passwordConfirm:undefined,
      passwordOk:true      
  })

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
    if (comparePassword()) {
      addUser(newUser,()=>setOpen(true));
    }
  };

  //비밀번호 확인 비교
  const comparePassword = () => {    
    if (newUser.password === valid.passwordConfirm) {
      setValid({
        ...valid,
        passwordOk: true
      });

      return true;
    } else {
      setValid({
        ...valid,
        passwordOk: false
      });

      return false;
    }
  };

  //입력값 state 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...newUser,
      [name]: value
    });
    
  };

  const onChangePasswordConfirm  = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValid({
      ...valid,
      [name]: value
    });    
  };

  const done = () =>{
    setOpen(false);
    history.push('/');
  }

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
        id="id-textfield"
        name="username"
        label="USER NAME"
        placeholder="ENTER YOUR NAME"
        fullWidth
        margin="normal"
        variant="outlined"
        defaultValue={newUser.username}
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

      <Dialog
        open={open}        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are Member"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Membership registration has been completed successfully!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={done}>Confirm</Button>          
        </DialogActions>
      </Dialog>
    </Box>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SignUp);
