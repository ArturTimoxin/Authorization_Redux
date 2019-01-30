import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./store/configureStore";
import Home from "./containers/Home";
import Auth from "./components/Auth/Auth";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root"),
);
