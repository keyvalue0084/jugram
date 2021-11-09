import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";

import routes, { CustomRouteProps } from "../var/routes";
import { Grid } from "@mui/material";

const BasicLayout = () => {
  const getRoutes = (routes: CustomRouteProps[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "BASIC") {
        return (
          <Route path={prop.path} component={prop.component} key={key}></Route>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Grid container>
      <Grid item alignItems="center" xs={12}>
        <Header />
      </Grid>
      <Grid item textAlign="center" xs={12}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/welcome" />
        </Switch>
      </Grid>
      <Grid item alignItems="center" xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default BasicLayout;
