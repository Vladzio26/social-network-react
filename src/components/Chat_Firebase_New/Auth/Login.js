import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import Firebase from '../../SimpleChat/Firebase';
import {Redirect} from 'react-router-dom';  

import Register from './Register';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			error: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = e => {
		e.preventDefault();
		const {email, password} = this.state;

		Firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				this.props.history.push('/Info');
			})
			.catch(error => {
				this.setState({error});
			});
    }
    
   

	render(){
		const {email, password, error} = this.state;
		return(
			<div className="auth--container">
				<h1>Login</h1>
				<p className="intro-text">Login to access your account</p>
				{error && <p className="error-message">{error.message}</p>}
				<form className="login-form" onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email address</label>
					<input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
					<label htmlFor="password">Password</label>
					<input 
						type="password"
						name="password"
						id="password"
						placeholer="password"
						value={password}
						onChange={this.handleChange}
					/>
					<button className="general-submit" onClick={this.redirect}>Log in</button>
                   
					<p>Don't have an account yet? <Link className="login-btn" to="/register">Register here</Link></p>
				</form>
			</div>
		);
	}
}

export default Login;