import React from "react";
import ReactDOM from "react-dom";

import BasicLayout from "./layout/BasicLayout";
import EntryLayout from "./layout/EntryLayout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/entry" render={props => <EntryLayout />} />
      <Route path="/" render={props => <BasicLayout />} />
      <Redirect from="/" to="/index" />{" "}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
