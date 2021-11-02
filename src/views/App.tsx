import React, { Suspense, useEffect } from "react";
import BasicLayout from "../layout/BasicLayout";
import EntryLayout from "../layout/EntryLayout";
import GoogleAuthCallback from "../sns/GoogleAuthCallback";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getMe } from "../hooks/Users";
import { useUserDispatch, useUserState } from "../context/UserContext";

const App = () => {
  const userDispatch = useUserDispatch();
  const jwt = sessionStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      getMe(jwt).then(response => {
        userDispatch({
          type: "LOGIN",
          user: response.data,
          jwt: jwt
        });
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/auth/callback/google"
          render={props => <GoogleAuthCallback />}
        />
        <Route path="/entry" render={props => <EntryLayout />} />
        <Route path="/" render={props => <BasicLayout />} />
        <Redirect from="/" to="/index" />{" "}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
