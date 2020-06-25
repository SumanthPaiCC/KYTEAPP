import React, { Component } from "react";
import "./Login.scss";
import webimg from "../assets/webintro.svg";
import mobimg from "../assets/mobintro.svg";
import dots from "../assets/dots.svg";
import kytelogo from "../assets/kytelogo.svg";
class Login extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="signupIntro">
              <div className="introtextOne">
                Online Events that create meaningful relationships
              </div>
              <br />
              <div className="introtextTwo">
                Kyte is online event platform designed for organisers, speakers,
                attendees. A new way to organise events and enabling to attendee
                conversations and providing engaging community-building
                experiences.{" "}
              </div>
              <div className="webimgIntro">
                <img src={webimg} alt="webimage" />
              </div>
              <div className="mobimgIntro">
                <img src={mobimg} alt="mobimage" />
              </div>
              <div className="dots">
                <img src={dots} alt="dots" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="signupContainer">
              <label className="labeltxt">Dont have an account?</label>
              <button className="logbutton">
                <div className="logbuttonText">Sign Up</div>
              </button>
              <div className="logo">
                <img src={kytelogo} alt="logo" />
              </div>
              <div className="hello">Welcome Back!</div>
              <div className="getStarted">Please Login....</div>
              <div>
                <form className="formContainer">
                  <input placeholder="Enter your Email" type="text"></input>

                  <input
                    placeholder="Enter your Password"
                    type="password"
                  ></input>
                <div className="forgotpwd">
                    Forgot Password?
                </div>
                  <div>
                    <button className="submitButton">
                      <div className="text">Login</div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
