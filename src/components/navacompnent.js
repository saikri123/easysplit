import React from 'react'
import {Link} from 'react-router-dom'
function Navcomponent()
{
    return(
        <div>
             <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                    <a className='navbar-brand' href='#'>Easy Split</a>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/welcome'>HOME</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}
export default Navcomponent