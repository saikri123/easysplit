import React from 'react'
import {Link} from 'react-router-dom'
function Navcomponent()
{
    return(
        <div>
             <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                    <div className='navbar-brand' href='#'>Easy Split</div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/'>HOME</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}
export default Navcomponent