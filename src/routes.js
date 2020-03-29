import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import RecordIncident from "./pages/RecordIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/register" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={RecordIncident} />
      </Switch>
    </BrowserRouter>
  );
}
