import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

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
       toString( this.state.email);
        toString(this.state.password);
        if(this.state.email==='chaithanya' && this.state.password==='123')
        {
            alert('sucessfull');
            let history=useHistory();
            history.push("/dashboard");
            
            
            fetch('http://localhost:4000',{
                method:'POST',
                body:
                {
                   email:this.state.email,
                   password:this.state.password 
                }
            })
            .then(res=>res.json())
            .then(res=>{
                console.log('res');
            })
            
           
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