import React from 'react';

import { connect } from 'react-redux';

import Chat from './Chat';
import Title from './Title'
import {Redirect} from 'react-router-dom';  



class ChatContainer extends React.Component {
   
  
  
  
  render(){


    return(
      <div>
      <Title/>
      <Chat { ...this.props} profile= {this.props.profile} />
      </div>
    );
  }
}
let AuthRedirectComponent = (props) =>{
  if (!this.props.isAuthoris) return <Redirect to= '/login' />
  return <ChatContainer {...props} />
}

const mapStateToProps = (state) =>({
  
  isAuthoris: state.auth.isAuthoris,
  login: state.auth.login,
  profile: state.profilePage.profile,
  users:state.usersPage.users,
  
})


export default connect(mapStateToProps,{})(Chat);