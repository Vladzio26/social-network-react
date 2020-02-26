import React from 'react';
import { TextField, Input, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import s from "./Chat.module.css";
import firebase from "firebase";
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import Firebase from './Firebase';
import {Redirect} from 'react-router-dom';  



class Chat extends React.Component {
   

    constructor(props){
        super(props)
        this.state = {
            text:"",
            messages: [],
            login:[this.props.login],
            users:{},
            currentUser:''
            }
    }



    componentDidMount(){
        this.authListener();

        console.log(this.state.currentUser)
        
    }

    componentWillMount(){
        
        var user = Firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        var currentUser = Firebase.auth().currentUser;
        console.log(currentUser)
        this.setState({currentUser:user.email})
        this.setState({displayName:user.displayName})
      
    }
      
    }



    authListener(){
        Firebase.auth().onAuthStateChanged((user)=>{
           
            if(user){
                this.setState({user});

               
                localStorage.getItem('user', user.uid);
                console.log(user)
                this.setState({currentUser:user.email});
                this.setState({displayName: user.displayName});
                this.setState({photoURL: user.photoURL})
            }else{
                
                this.setState({user: null });
                localStorage.removeItem('user');
            };

         
        });

    }

    componentDidMount(){
     /*   var config = {
            apiKey: "AIzaSyAnClSLoQLouw7qs5uOJS8YcxY1EClhLi8",
            authDomain: "chat-for-react.firebaseapp.com",
            databaseURL: "https://chat-for-react.firebaseio.com",
            projectId: "chat-for-react",
            storageBucket: "chat-for-react.appspot.com",
            messagingSenderId: "806936981186",
            appId: "1:806936981186:web:d2ddde8d04f08cfb0bd55b",
            measurementId: "G-5MBZ2LVV2N"
          };*/
          //firebase.initializeApp(config);
          this.getMessages();
    }firebase
 
onSubmit =  event =>{
    if(event.charCode === 13 && this.state.text.trim() !==""){
    this.writeMessageToDB(this.state.text, this.props.login)
    this.setState({text: ""})
    }
}


 writeMessageToDB = (message, user) =>{
    debugger
    Firebase
    .database()
    .ref("messages/")
    .push({
        text:message,
        //user:currentUser
    })
}
  getMessages = () =>{
    let messagesDB = Firebase
    .database()
    .ref("messages/")
    .limitToLast(500)
    messagesDB.on("value", snapshot =>{
        let newMessages = []
        let newUser = []
        snapshot.forEach(child =>{
            var message=child.val()
            var login=child.val()
            newMessages.push({id: child.key, text:message.text, user:this.state.displayName })
           // newUser.push({id: child.key, user:login.user })
           console.log(newMessages)
        })
        this.setState({messages: newMessages, })
       // this.setState({users: newUser, })
    })
}

renderMessages = () =>{
   
 return this.state.messages.map((message)=>(
    
     <ListItem>
         <div className={s.borderMessage}>
         
 <div className={s.user}>{message.user}</div><div className={s.message}>{message.text}</div>
       </div>
    </ListItem>
    
 ))
}
/*
renderUser = () =>{
    return this.state.users.map((user)=>(
        
            <ListItemText style={{wordBreak:"break-word"}} primary={user.user}  ></ListItemText>
      
    ))
   }
*/

   addEmoji = (e) => {
    //console.log(e.native)
    let emoji = e.native;
    this.setState({
      text: this.state.text + emoji
    })
  }




render(){
    if (this.props.isAuthoris == false) return <Redirect to ={"/login"} />
        return(
            <div className={s.app}>
                <Title { ...this.props}/>
                <div className={s.wrapper}>
              
                <List>
                <ListItem>
                <ListItemText><div>{this.renderMessages()}</div></ListItemText> 
                    </ListItem>
                </List>
                
           
                
            <span ref={el=> (this.bottomSpan = el)} ></span>
            </div>
           
            <input  placeholder="Напечатай щоб відправити..."
             onChange={event => this.setState({text:event.target.value})}
                value={this.state.text}
                onKeyPress={this.onSubmit}
                className={s.inputMessage}></input>

            <div className={s.emoji}>
            <Picker onSelect={this.addEmoji} />
            </div>
            {  console.log(this.state.messages)
        }{  
    console.log(this.state.login)
    
        }{  
            console.log(this.state.users)
        }{  
            console.log(this.state.currentUser)}
            </div>
        )
    }
}
export default Chat;