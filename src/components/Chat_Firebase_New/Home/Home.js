import React from 'react';
import Firebase from '../../SimpleChat/Firebase';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';  
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import s from "./Home.module.css";
import Chatbox from './Chatbox';

class Home extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			message: ''
		}
	}

	handleChange = e => {
		debugger
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = e => {
		e.preventDefault();
		if(this.state.message !== ''){
			const chatRef = Firebase.database().ref('general');
			const chat = {
				message: this.state.message,
				user: this.props.user.displayName,
				uid:this.props.user.uid,
				timestamp: new Date().getTime()
			}
			
			chatRef.push(chat);
			this.setState({message: ''});
		}
	}

	render(){
		return(
			<div className="home--container">
				<div className={s.title}><h1>Welcome to the chat!</h1></div>
                <Chatbox className={s.chat} />
				{this.props.user && 
					<div className="allow-chat">
						<form className="send-chat" onSubmit={this.handleSubmit}>
							<input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} placeholder='Leave a message...' />
						</form>
					</div>
				}
                {!this.props.user && 
                   <Redirect to ={"/login"} />
					
				}
			</div>
		);
	}
}

export default Home;