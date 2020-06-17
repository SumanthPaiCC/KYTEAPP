import React from "react";
import history from "./history";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import NoRoute from "./components/NoRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthCheck from './AuthCheck'
function App() {
  return (
    <Router history={history}>
      <React.Fragment>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Redirect from="/" to="/register" exact />
          <Route component={NoRoute} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
