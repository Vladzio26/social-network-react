import React, {Component} from "react";
import Firebase from "../../SimpleChat/Firebase";

class Login_ extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        

        this.state = {
            email:'',
            password:'',
            displayName:''
            
        }
    }

    login(e){
        e.preventDefault();
        console.log(Firebase.auth().currentUser)
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            
        }).catch((error)=>{
            console.log(error);
            alert(error);
        })
    }


    signup(e){
        e.preventDefault();
        Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error)=>{
            console.log(error);
            alert(error);
        })
   
    }
  
   

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <span>Email</span>
                        <input value={this.state.email} onChange={this.handleChange} type='email' name='email' placeholder='Enter email...'/>
                    </div>
                    <div>
                        <span>Password</span>
                        <input value={this.state.password} onChange={this.handleChange} type='password' name='password' placeholder='Enter password...'/>
                    </div>


                   
                
                    <button type='submit' onClick={this.login}>Login</button>
                    <button  onClick={this.signup}>Singup</button>
                </form>
            </div>
        )
    }
}



export default Login_;