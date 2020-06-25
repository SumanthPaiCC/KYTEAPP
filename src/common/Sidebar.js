import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import sidelogo from "../assets/sidelogo.svg";
import mask from "../assets/Mask Group.svg";
import pay from "../assets/pay.svg";
import acc from "../assets/acc.svg";
import help from "../assets/help.svg";
import logout from "../assets/logout.svg";
import eve2 from "../assets/eve2.svg";
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="vertical-nav">
          <div className="side-logo">
            <img src={sidelogo} alt="side logo" />
          </div>
          <div className="prof-cont">
            <div className="prof-icon">
              <img src={mask} alt="prof pic" />
            </div>
            <div className="prof-name">
              Jhon Doe
              <div className="emailtext">jhon.doe@cognitiveclouds.com</div>
            </div>
          </div>
          <div className="list-cont">
            <ul className>
              <li>
                <div className="nav-item-cont">
                  <div>
                    <Link>
                      <i>
                        <img src={eve2} alt="eve" />
                      </i>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>My Events</div>
                </div>
              </li>
              <li>
                <div className="nav-item-cont">
                  <div>
                    <Link>
                      <i>
                        <img src={pay} alt="pay" />
                      </i>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    Payments
                  </div>
                </div>
              </li>
              <li>
                <div className="nav-item-cont">
                  <div>
                    <Link>
                      <i>
                        <img src={acc} alt="acc" />
                      </i>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    Profile
                  </div>
                </div>
              </li>
              <li>
                <div className="nav-item-cont">
                  <div>
                    <Link>
                      <i>
                        <img src={help} alt="help" />
                      </i>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    Help Center
                  </div>
                </div>
              </li>
              <li className="logout">
                <div className="nav-item-cont">
                  <div>
                    <Link>
                      <i>
                        <img src={logout} alt="logout" />
                      </i>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                    Logout
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
