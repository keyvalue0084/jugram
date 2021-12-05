import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthFooter from "../components/Footers/AuthFooter";
import AuthHeader from "../components/Headers/AuthHeader";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

import GoogleAuthCallback from "../sns/GoogleAuthCallback";
import routes, { CustomRouteProps } from "../var/routes";

const AuthLayout = () => {
  const getRoutes = (routes: CustomRouteProps[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "AUTH") {
        return (
          <Route path={prop.path} component={prop.component} key={key}></Route>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <AuthHeader />
      <div>
        <Switch>
          {getRoutes(routes)}
          <Route path="/auth/callback/google" component={GoogleAuthCallback} />
          <Route path="/auth/signup" component={SignUp} />
          <Route path="/auth/signin" component={SignIn} />
        </Switch>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
