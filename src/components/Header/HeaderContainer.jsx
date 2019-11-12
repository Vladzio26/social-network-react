import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserData} from './../../redux/auth-reducer';



class HeaderContainer extends React.Component {
    componentDidMount() {
     axios.get (`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})

      .then(response =>{  

        if(response.data.resultCode === 0){
          let{id, email, login} = response.data.data;
          this.props.setUserData(id, email, login);
        
      }
     });
    }
  
  
  
  render(){
    return(
      <Header { ...this.props} profile= {this.props.profile} />
    );
  }
}


const mapStateToProps = (state) =>({
  
  isAuthoris: state.auth.isAuthoris,
  login: state.auth.login,
  profile: state.profilePage.profile,
  users:state.usersPage.users,
  
})


export default connect(mapStateToProps,{setUserData})(HeaderContainer);