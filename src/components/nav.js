import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className='navbeside'>
                <div className='container row' >
                    <div className='col-xs-6'>
                        <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div className= 'col-xs-6'>
                        <Link to='/dashboard'>Dashboard</Link>
                    </div>
                </div>

            </div>

        );
    }
}
export default Nav