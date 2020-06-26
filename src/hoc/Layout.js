import React, { Component } from 'react'
import Sidebar from '../common/Sidebar'


class Layout extends Component {
    render() {
        return (
            <>
                <div className="row">
                <div className='col-md-4'>
                <Sidebar/>
                </div>
                <div className='col-md-8'>
                {this.props.children}
                </div>
                </div>
               
                
            </>
        )
    }
}

export default Layout
