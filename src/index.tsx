import React from "react";
import ReactDOM from "react-dom";

import Basic from "./layout/Basic";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Basic />} />
      <Redirect from="/" to="/index" />{" "}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
