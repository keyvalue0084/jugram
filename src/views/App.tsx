import React, { useEffect } from "react";

import BasicLayout from "../layout/BasicLayout";
import EntryLayout from "../layout/EntryLayout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getMe, NewUser } from "../hooks/Users";
import { useUserState, useUserDispatch } from "../context/UserContext";
import { AxiosResponse } from "axios";

const App = () => {
  const userState = useUserState();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    if (!!sessionStorage.getItem("jwt")) {
      let getMeCallback = (reponse: AxiosResponse) => {
        let data = reponse.data as any;
        userDispatch({
          type: "LOGIN",
          user: data as NewUser,
          jwt: sessionStorage.getItem("jwt") as String
        });
      };

      getMe(sessionStorage.getItem("jwt") as string, getMeCallback);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entry" render={props => <EntryLayout />} />
        <Route path="/" render={props => <BasicLayout />} />
        <Redirect from="/" to="/index" />{" "}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
