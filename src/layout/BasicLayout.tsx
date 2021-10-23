import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";
import Welcome from "../views/Welcome";
import ArticleList from "../views/ArticleList";
import ArticleView from "../views/ArticleView";
import ArticleRegister from "../views/ArticleRegister";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/view" component={ArticleView} />
        <Route path="/list" component={ArticleList} />
        <Route path="/regist" component={ArticleRegister} />
      </Switch>
      <Footer />
    </>
  );
};

export default BasicLayout;
