import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Signin extends Component {
    state = {
        email: '',
        password: ''
    };
    handleemail = (event) => {
        const email = event.target.value;
        this.setState({ email })
    }
    handlepassword = (event) => {
        const password = event.target.value;
        this.setState({ password })
    }
    validate=()=>
    {
        if(this.state.email=='vagi2chaitu@gmail.com' && this.state.password=='123')
        {
            alert('correct');
           
        }
    }
    render() {

        return (
            <div className='form'>
                <form onSubmit={this.validate}>
                    <table>
                        <tr>
                            <td><label>email</label></td>
                                <td><input type='text' vlaue={this.state.email} onChange={this.handleemail} /></td>
                        </tr>
                         <tr>
                            <td><label>password</label></td>
                            <td><input type='password' value={this.state.password} onChange={this.handlepassword} /></td>
                        </tr>
                    </table><br/>
                    <Link to='/dashboard'><input type='submit' value='login'/></Link>

                </form>
            </div>

        );
    }
}
export default Signin