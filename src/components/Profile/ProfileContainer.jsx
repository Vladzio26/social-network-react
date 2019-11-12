import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post';
import Personality from './Personality/Personality';
import Profile from "./Profile";
//import {addPost} from "./Profile"
import {connect} from "react-redux"
import redux from "redux";
import {Redirect} from 'react-router-dom';  



import { updateNewTextPostAC, addPostAC } from '../../redux/profile-reducer';

  
const mapStateToProps = (state) => {

  return{
    isAuthoris: state.auth.isAuthoris,
    persData: state.profilePage.persData,
    dataPost: state.profilePage.dataPost,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return{
    
    updateNewPost: (text) => {
      let action = updateNewTextPostAC(text);
      dispatch(action);
    },
    addPost: ()=>{
      dispatch(addPostAC());
    }
  }
}



export default  connect(mapStateToProps, mapDispatchToProps)(Profile);