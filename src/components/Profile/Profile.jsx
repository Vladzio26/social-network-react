import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post';
import Personality from './Personality/Personality';
import PersonalityContainer from './Personality/PersonalityContainer';
//import ProfileContainer from "./ProfileContainer";
//import { addPostAC, updateNewTextPostAC } from '../../redux/profile-reducer';
import {Redirect} from 'react-router-dom';  





const Profile = (props) => {

  
 
    const postElement = props.dataPost.map( p => <Post message= {p.message} like={p.like} updateNewPost={p.updateNewPost}  />)
    const personElement = props.persData.map(per => <PersonalityContainer profile={per.profile} name = {per.name} age ={per.age} phone ={per.phone}/> )
  
    let newPostElement = React.createRef();
    
    let addPost = () => {
      
      
      //let text = newPostElement.current.value;
     
      //  newPostElement.current.value="";
        props.addPost();
       
        
    }

   
    let onPostChange = (text) =>{
          
      var text = newPostElement.current.value;
      props.updateNewPost(text);
     

    }


    if (props.isAuthoris == false) return <Redirect to ={"/login"} />
   
    return (
      
    <div className={s.content}>
        <img src="https://flickrtheblog.files.wordpress.com/2017/11/10285894466_b72616f2c1_b.jpg?w=1024&h=423&crop=1" />
        
        {personElement}

        <div className ={s.post_maker}>
        <h2>My posts</h2>
          <textarea ref={ newPostElement } onChange ={ onPostChange } value={props.newPostText}></textarea>
            <button onClick =  { addPost }>Put</button>
        </div>

        <div>
          {postElement}
        </div>
      </div>
    )
  }
export default Profile;