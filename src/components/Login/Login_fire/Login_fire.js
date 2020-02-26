import React , {Component} from "react";
import Firebase from "../../SimpleChat/Firebase";
import {Redirect} from 'react-router-dom'; 
import Home from '../../Home';
import Login_ from "./Login_";


class Login_fire extends Component {
    constructor(props){
        super(props);
       
        this.state ={
            user:{},
            currentUser:'',
            displayName:'',
            photoURL:'',
        }
    }

    componentDidMount(){
        this.authListener();
      
        console.log(this.state.currentUser)
        
    }

    authListener(){
        Firebase.auth().onAuthStateChanged((user)=>{
            debugger
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


render(){
return(
    <div>
        
        {this.state.user ? (<Home currentUser={this.state.currentUser} displayName={this.state.displayName} photoURL={this.state.photoURL}/>) : (<Login_/>)}
    </div>
)
}}
export default Login_fire;