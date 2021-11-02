import Welcome from "../views/Welcome";
import ArticleList from "../views/ArticleList";
import ArticleView from "../views/ArticleView";
import React from "react";
import { RouteProps } from "react-router";

export interface CustomRouteProps extends RouteProps {
  layout: string;
  name: string;
  show: boolean;
}

const routes: Array<CustomRouteProps> = [
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
    layout: "BASIC",
    show: true
  },
  {
    path: "/articleList",
    name: "ArticleList",
    component: ArticleList,
    layout: "BASIC",
    show: true
  },
  {
    path: "/articleView",
    name: "ArticleView",
    component: ArticleView,
    layout: "BASIC",
    show: true
  }
];

export default routes;
