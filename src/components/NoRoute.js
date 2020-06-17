import React, { Component } from "react";

export class NoRoute extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1>404</h1>
          </div>
          <div>
            <h1>No Page Found!!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NoRoute;
