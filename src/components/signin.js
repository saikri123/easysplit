import React, { Component } from 'react';
import Dashboard from './dashboard';
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
           //<Dashboard/>
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
                    <input type='submit' value='login'/>


                </form>
            </div>

        );
    }
}
export default Signin