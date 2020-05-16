import React, { Component } from 'react'
import './style.css';
class Signup extends Component {
    state = {
        username: ' ',
        emial: '',
        passsword: '',
        retype: '',
        usernameError:'',
        emailError:'',
        passowrdError:'',
        retypeError:''
    };
    usernameFunction = (event) => {
        const username = event.target.value;
        this.setState({
            username
        });
    };
    emailFunction = (event) => {
        const email = event.target.value
        this.setState({
            email
        })
    };
    passwordFunction = (event) => {
        const password = event.target.value;
        this.setState({
            password
        })
    };
    retypeFunction = (event) => {
        const retype = event.target.value;
        this.setState({
            retype
        })
    };
    validate=()=>
    {
        let usernameError='';
        let emailError='';
       // let passowrdError='';
        let retypeError='';
        var nameregex=/^([a-z A-z]{3,25})$/;
        var emailregx=/^([a-z A-z 0-9\.-]+)@([a-z]+).([a-z]{2,20})(.[a-z]{2,10})?$/;
        if(!emailregx.test(this.state.email))
        {
            emailError='inavllid';
        } 
        if(!nameregex.test(this.state.username))
        {
            usernameError='name should contain more than 2 characters';
        }
        if(emailError)
        this.setState({emailError});
        if(usernameError)
        this.setState({usernameError});
        if(this.state.password!=this.state.retype)
        {
            retypeError='invalid';
        }
        if(retypeError)
        this.setState({retypeError})
    }

    handleSubmit=(event)=>
    {
        event.preventDefault();
        let validate=this.validate();
        if(validate)
        {
            console.log(this.state)
        }

    }
    render() {
        return (
            <div className='form'>
                <form className='upform' onSubmit={this.handleSubmit}>
                    <table className='table'>
                        <tr>
                            <td><label>UserName:</label></td>
                            <td><input className='userinput' required='true' autoComplete='nope' type='text' value={this.state.username} onChange={this.usernameFunction} /></td>
                        </tr>
                        <div className='error'>{this.state.usernameError}</div>

                        <tr>
                            <td> <label>Email:</label></td>
                            <td> <input className='emailinput' required='true' autoComplete='nope' type='text' value={this.state.email} onChange={this.emailFunction} /></td>
                        </tr>
                        <div className='error'>{this.state.emailError}</div>

                        <tr>
                            <td><label>Password:</label></td>
                            <td> <input className='passwordinput' required='true' autoComplete='nope' type='password' value={this.state.password} onChange={this.passwordFunction} /></td>    
                        </tr>
                        <div className='error'>{this.state.passowrdError}</div>

                        <tr>
                            <td> <label>Retype-Password:</label></td>
                            <td> <input className='retypeinput' required='true' autoComplete='nope' type='password' value={this.state.retype} onChange={this.retypeFunction} /></td>
                        </tr>
                        <div className='error'>{this.state.retypeError}</div>
                    </table>
                    <input type='submit' />
                </form>
                <script>
             
                 
             </script>
            </div>
           
           
        );




    }

}
export default Signup