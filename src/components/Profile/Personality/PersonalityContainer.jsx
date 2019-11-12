import React from 'react';
import s from './Personality.module.css';
import Personality from "./Personality";
import {connect} from 'react-redux';
import axios from "axios";
import {updateStatus, getStatus ,setUsersProfile, toggleIsFatchingAC} from "./../../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';  
import { profileAPI } from "../../../api/api";
class PersonalityContainer extends React.Component {
  
  componentDidMount () {
    //this.props.toggleIsFatching(true);
let userId = this.props.match.params.userId;

if(!userId){
  userId = 1710;
}
    axios.get (`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
    .then(response =>{  
        this.props.setUsersProfile(response.data);
      //  this.props.toggleIsFatching();
       
      //this.props.setStatus(userId);

     
      
    });
 
  }
  render(){
    if (this.props.isAuthoris == false) return <Redirect to ={"/login"} />
    return(
      <Personality updateStatus={this.props.updateStatus} status={this.props.status} {... this.props} profile= {this.props.profile}/>
      )
  }
}



 let AuthRedirectComponent = (props) =>{
if (props.isAuthoris == false) return <Redirect to ={"/login"} />
return <PersonalityContainer {...props} />
}

 let mapStateToProps = (state) =>({
      profile: state.profilePage.profile,
      isFatching: state.usersPage.isFatching,
      status:state.profilePage.status
 })

 let UrlDataComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{getStatus,updateStatus, setUsersProfile, toggleIsFatchingAC})(UrlDataComponent)