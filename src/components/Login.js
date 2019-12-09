import React, { Component } from 'react';
import { UserContext } from '../context.js/UserContext';

class Login extends Component {

    static contextType = UserContext;

    state = {
        email: '',
        password: '',
        msg: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password, msg } = this.state
        const details = {
            email, password
        }
        fetch('http://localhost:3000/user/login', {
            method: 'post',
            body:JSON.stringify(details), 
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === true) {
                this.context.logIn();
            }
            this.setState({msg: data.msg,})
        })
        .catch(() => this.setState({msg: 'Login Failed!'})
        )        
    }

    render() {

        const { email, password, msg } = this.state

        return (
            <div className="login-form">
            <p>{msg}</p>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name='email' value={email} className="form-control" onChange={this.onChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name='password' value={password} className="form-control" onChange={this.onChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>  
          </div>
        );
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

}

export default Login;