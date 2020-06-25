import React, { Component } from "react";
import "./Register.scss";
import webimg from "../assets/webintro.svg";
import mobimg from "../assets/mobintro.svg";
import dots from "../assets/dots.svg";
import kytelogo from "../assets/kytelogo.svg";
class Register extends Component {
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
              <label className="labeltxt">Already have an account?</label>
              <button className="logbutton">
                <div className="logbuttonText">Login</div>
              </button>
              <div className="logo">
                <img src={kytelogo} alt="logo" />
              </div>
              <div className="hello">Hello.</div>
              <div className='getStarted'>To get started please create an account....</div>
              <div>
                  <form className='formContainer'>
                        
                        <input  placeholder='Full Name' type='text'></input>
                       
                        
                        <input  placeholder='Email' type='text'></input>
                        
                        
                        <input  placeholder='Password' type='password'></input>
                        
                        <div className='checkBox'>
                            <input  className='check' type='checkbox'></input>
                            <label className='accept'>Accept our <span style={{color:'#43db92'}}>Terms of Use</span> & <span style={{color:'#43db92'}}>Privacy Policy</span></label>
                        </div>
                        <div>
                            <button className='submitButton'><div className='text'>Create My Account</div></button>
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

export default Register;
