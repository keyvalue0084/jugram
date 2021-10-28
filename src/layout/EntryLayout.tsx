import React from "react";
import { Route, Switch } from "react-router-dom";

import EntryFooter from "../components/Footers/EntryFooter";
import EntryHeader from "../components/Headers/EntryHeader";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

const EntryLayout = () => {
  return (
    <>
      <EntryHeader />
      <div>
        <Switch>
          <Route path="/auth/callback/google" component={SignIn} />
          <Route path="/entry/signup" component={SignUp} />
          <Route path="/entry/signin" component={SignIn} />
        </Switch>
      </div>
      <EntryFooter />
    </>
  );
};

export default EntryLayout;
