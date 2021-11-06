import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";

import routes, { CustomRouteProps } from "../var/routes";

const BasicLayout = () => {
  const getRoutes = (routes: Array<CustomRouteProps>) => {
    return routes.map((prop, key) => {
      if (prop.layout === "BASIC") {
        return <Route path={prop.path} component={prop.component}></Route>;
      } else {
        return null;
      }
    });
  };

  console.log(getRoutes(routes));
  return (
    <>
      <Header />
      <Switch>
        {getRoutes(routes)}
        <Redirect from="*" to="/welcome" />
      </Switch>
      <Footer />
    </>
  );
};

export default BasicLayout;
