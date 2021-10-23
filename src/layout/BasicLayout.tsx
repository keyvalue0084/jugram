import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";
import Welcome from "../views/Welcome";
import ArticleList from "../views/ArticleList";
import ArticleView from "../views/ArticleView";
import ArticleRegister from "../views/ArticleRegister";
import BasicLoading from "../lottie/BasicLoading";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<BasicLoading />}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/view" component={ArticleView} />
            <Route path="/list" component={ArticleList} />
            <Route path="/regist" component={ArticleRegister} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default BasicLayout;
