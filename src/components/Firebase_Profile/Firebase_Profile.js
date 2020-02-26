import React from "react";
import Firebase, {auth} from "../SimpleChat/Firebase";
import {Redirect} from 'react-router-dom';  


class Firebase_Profile  extends React.Component{
    constructor(props){
		super(props);
		this.state = {
            user:{}
        }
		
	}
    componentDidMount() {
        
        auth.onAuthStateChanged(user=> {
            if(user){
				this.setState({
					user
				});
			}else {
              // No user is signed in.
            }
          });
    
       }
    

    render(){
        return(
            <div>
    <h1> Your Profile:</h1>
        <ul>
            <li>{this.state.user.uid}</li>
            <li><img src={this.state.user.photoURL}/></li>
            <li>{this.state.user.email}</li>
            <li>{this.state.user.displayName}</li>
        </ul>
        {!this.props.user && 
                   <Redirect to ={"/login"} />
					
				}
            </div>
        )
    }
}



export default Firebase_Profile;