import React, { Suspense, useEffect, lazy } from "react";
import BasicLayout from "../layout/BasicLayout";
import EntryLayout from "../layout/EntryLayout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getMe } from "../hooks/Users";
import { useUserDispatch } from "../context/UserContext";
import HeadLoading from "../lottie/HeadLoading";

const App = () => {
  const userDispatch = useUserDispatch();
  const jwt = sessionStorage.getItem("jwt");

  if (jwt) {
    getMe(jwt).then(response => {
      userDispatch({
        type: "LOGIN",
        user: response.data.user,
        jwt: jwt
      });
    });
  }

  return (
    <BrowserRouter>
      <Suspense fallback={HeadLoading}>
        <Switch>
          <Route path="/entry" render={props => <EntryLayout />} />
          <Route path="/" render={props => <BasicLayout />} />
          <Redirect from="/" to="/index" />{" "}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
