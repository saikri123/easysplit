import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
//import Dashboard from '/dashboard';

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
    validate = (event) => {
        event.preventDefault()
        
        var data={
            email1:'chaithnaya',
            password1:'123'
           
        }
        fetch('/signin',{
            body:JSON>stringify(data)
        })
        .then(function(res)
        {
           res.json()
        })
        .then(function(res){
            console.log('res',res);
        })

        // fetch('/signin',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type' : 'application/json'
        //     },
        //     body:JSON.stringify(data),
        //     mode:'no-cors'
        // })
        // .then(res=>res.json())
        // .then(res=>
        //     {
        //         console.log('res',res);
        //     })
       
        if (this.state.email === 'chaithanya' && this.state.password === '123') {
            alert('sucessfull');
          window.location.pathname='/dashboard';

        }


    }
    render() {

        return (
            <div className='form'>

                <form action="/signin" method="POST" onSubmit={this.validate}>
                    <table>
                        <tr>
                            <td><label>email</label></td>
                            <td><input type='text' vlaue={this.state.email} onChange={this.handleemail} /></td>
                        </tr>
                        <tr>
                            <td><label>password</label></td>
                            <td><input type='password' value={this.state.password} onChange={this.handlepassword} /></td>
                        </tr>
                    </table><br />
                    <input type='submit' value='login' />

                </form>
            </div>

        );
    }
}
export default Signin