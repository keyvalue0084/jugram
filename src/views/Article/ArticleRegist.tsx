import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ArticleRegister = () => {
  return (
    <Box
      pl={30}
      pr={30}
      pt={10}
      style={{ maxHeight: "80vh", overflow: "auto" }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={10}>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Contents"
            multiline
            rows={14}
            fullWidth
            defaultValue=""
          />
        </Grid>
        <Grid item xs={9} marginTop={2}>
          <Button
            variant="outlined"
            color="primary"
            href="/"
            size="large"
            fullWidth
          >
            Regist
          </Button>
        </Grid>
        <Grid item xs={3} marginTop={2}>
          <Button
            variant="outlined"
            color="secondary"
            href="/"
            size="large"
            fullWidth
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArticleRegister;
