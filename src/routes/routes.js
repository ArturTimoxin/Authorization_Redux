import React from "react";
import { Route } from "react-router";

import App from "../containers/App";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";

export const routes = (
  <div>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/authorization" component={Auth} />
    </Route>
  </div>
);
