import React from "react";

import AuthLayout from "../layout/AuthLayout";
import BasicLayout from "../layout/BasicLayout";
import Welcome from "../views/Welcome";
import ArticleList from "../views/ArticleList";
import ArticleView from "../views/ArticleView";
import GoogleAuthCallback from "../sns/GoogleAuthCallback";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";

import { RouteProps } from "react-router";
import { V_ROUTES, V_LAYOUT_ROUTES } from "./keywords";

export interface CustomRouteProps extends RouteProps {
  layout?: string;
  name: string;
  show: boolean;
}

export const layoutRoutes: CustomRouteProps[] = [
  {
    path: V_LAYOUT_ROUTES.AUTH.PATH,
    name: V_LAYOUT_ROUTES.AUTH.NAME,
    component: AuthLayout,
    show: true
  },
  {
    path: V_LAYOUT_ROUTES.BASIC.PATH,
    name: V_LAYOUT_ROUTES.BASIC.NAME,
    component: BasicLayout,
    show: true
  }
];

const routes: CustomRouteProps[] = [
  {
    path: V_ROUTES.WELCOME.PATH,
    name: V_ROUTES.WELCOME.NAME,
    component: Welcome,
    layout: V_ROUTES.WELCOME.LAYOUT,
    show: true
  },
  {
    path: V_ROUTES.ARTICLE_LIST.PATH,
    name: V_ROUTES.ARTICLE_LIST.NAME,
    component: ArticleList,
    layout: V_ROUTES.ARTICLE_LIST.LAYOUT,
    show: true
  },
  {
    path: V_ROUTES.ARTICLE_VIEW.PATH,
    name: V_ROUTES.ARTICLE_VIEW.NAME,
    component: ArticleView,
    layout: V_ROUTES.ARTICLE_VIEW.LAYOUT,
    show: true
  },
  {
    path: V_ROUTES.AUTH.CALLBACK_GOOGLE.PATH,
    name: V_ROUTES.AUTH.CALLBACK_GOOGLE.NAME,
    component: GoogleAuthCallback,
    layout: V_ROUTES.AUTH.CALLBACK_GOOGLE.LAYOUT,
    show: true
  },
  {
    path: V_ROUTES.AUTH.SIGN_IN.PATH,
    name: V_ROUTES.AUTH.SIGN_IN.NAME,
    component: SignIn,
    layout: V_ROUTES.AUTH.SIGN_IN.LAYOUT,
    show: true
  },
  {
    path: V_ROUTES.AUTH.SIGN_UP.PATH,
    name: V_ROUTES.AUTH.SIGN_UP.NAME,
    component: SignUp,
    layout: V_ROUTES.AUTH.SIGN_UP.LAYOUT,
    show: true
  }
];

export default routes;
