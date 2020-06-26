import React from "react";
import history from "./history";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import NoRoute from "./components/NoRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthCheck from "./AuthCheck";
import Sidebar from "./common/Sidebar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Redirect from="/" to="/register" component={Register} exact />
        <Route path="/*" component={NoRoute} />
      </Switch>
    </Router>
  );
}

export default App;
