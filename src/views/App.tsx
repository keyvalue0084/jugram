import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getMe } from "../hooks/Users";
import { useUserDispatch, useUserState } from "../context/UserContext";
import { layoutRoutes, CustomRouteProps } from "../var/routes";

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

  const getRoutes = (routes: CustomRouteProps[]) => {
    return routes.map((prop, key) => {
      if (prop.show === true) {
        return (
          <Route path={prop.path} component={prop.component} key={key}></Route>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {getRoutes(layoutRoutes)}
        <Redirect from="/" to="/index" />{" "}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
