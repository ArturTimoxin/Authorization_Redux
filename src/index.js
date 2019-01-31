import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./store/configureStore";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Settings from "./pages/Settings/Settings";
import { NotFound } from "./pages/NotFound/NotFound";
import ProtectedRoute from "./utils/ProtectedRoute";
import "semantic-ui-css/semantic.min.css";
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <ProtectedRoute path="/settings" component={Settings} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root"),
);
