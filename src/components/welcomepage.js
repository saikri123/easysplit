import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
class Welcome extends Component {
    render() {
        return (

                <div class='body'>
                
                
                    <div class='btns'>
                        <button className='btn btn-warning signin' ><Link to='/signin'>signin</Link>  </button>
                        <button className='btn btn-danger signup' ><Link to='/signup'>signup</Link></button>
                    </div>
                </div>


        );
    }
}
export default Welcome