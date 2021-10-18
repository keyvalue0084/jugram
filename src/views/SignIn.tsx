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

function SignIn(props: Props) {
  const { classes } = props;

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
      <Box textAlign="center">
        <Button variant="outlined" className={classes.button} color="primary">
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
        <Button variant="outlined" className={classes.button} color="secondary">
          CANCEL
        </Button>
      </Box>
    </Box>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SignIn);
