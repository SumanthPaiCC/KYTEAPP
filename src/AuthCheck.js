import React from "react";
import {Redirect} from "react-router-dom";
function AuthCheck(props) {
  const Cmp = props.targetComponent;
  var accessToken = localStorage.getItem("accessToken");

  return <div>{accessToken ? <Cmp /> : <Redirect to="/login" />}</div>;
}

export default AuthCheck;
