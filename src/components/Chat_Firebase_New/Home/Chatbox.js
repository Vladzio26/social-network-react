import React from 'react';
import Firebase from '../../SimpleChat/Firebase';
import s from "./Chatbox.module.css";


class Chatbox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			chats: []
		}
	}

	componentDidMount(){
		const chatRef = Firebase.database().ref('general');
		chatRef.on('value', snapshot => {
            const getChats = snapshot.val();
            console.log(chatRef);
			let ascChats = [];
			for(let chat in getChats){
				if(getChats[chat].message !== ''){
					
					ascChats.push({
                        id: chat,
                        uid:getChats[chat].uid,
						message: getChats[chat].message,
						user: getChats[chat].user,
						date: getChats[chat].timestamp
					});
				}
            }
           
			const chats = ascChats;
			this.setState({chats});
		});
	}

	render(){
		return(
			<div className={s.chatbox}>
				<ul className={s.chat_list}>
					{this.state.chats.map(chat => {
						const postDate = new Date(chat.date);
						return(
                            
							<li key={chat.id}>
                    
								<em>{postDate.getDate() + '/' + (postDate.getMonth()+1)}</em>
								<strong>{chat.user}:</strong> 
								{chat.message}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Chatbox;