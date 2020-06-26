import React, { Component } from "react";
import Layout from "../hoc/Layout";
import './Dashboard.scss'
class Dashboard extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className='head-container'>
            <div className='eventext'>Events</div>
            <div className='spbutton'>
              <button className='evebutton'><span className='btext'>Create Event</span></button>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Dashboard;
