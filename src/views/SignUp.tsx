import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { createStyles, withStyles, WithStyles } from "@mui/styles";
const styles = createStyles({
  button: {
    margin: 10
  }
});

export interface Props extends WithStyles<typeof styles> {}

function SignUp(props: Props) {
  const { classes } = props;

  return (
    <Box
      pl={30}
      pr={30}
      pt={30}
      style={{ minHeight: "70vh", overflow: "auto" }}
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
        id="outlined-uncontrolled"
        label="ID"
        placeholder="ENTER YOUR ID"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="PASSWORD"
        placeholder="ENTER YOUR PASSWORD"
        fullWidth
        type="password"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-uncontrolled"
        label="PASSWORD CONFIRM"
        placeholder="CONFIRM YOUR PASSWORD"
        fullWidth
        type="password"
        margin="normal"
        variant="outlined"
      />
      <Box textAlign="center">
        <Button variant="outlined" className={classes.button} color="success">
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
