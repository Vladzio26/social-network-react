import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import Feeds from './components/Feeds/Feeds';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';

import Chat from './components/SimpleChat/Chat';
import Login from "./components/Login/Login";
import Music from './components/Music/Music';
import ChatContainer from './components/SimpleChat/ChatContainer';
import Photo from './components/Photo/Photo';
import Photo_2 from './components/Photo/Photo_2'
import Footer from './components/Footer/Footer';

import './stars.scss';

class App extends React.Component {
 
    render(){

    return (
      
      <div className = 'grid-wrapper '>
        <HeaderContainer />
        <Navbar  />

        <div className="content demo0" augmented-ui="tl-clip-y br-clip-y exe" >
     
        <Route path='/dialogs' render={ () =><ChatContainer/>}/>
        

        <Route path='/feeds' render={() =><Feeds />}/>
        <Route path='/profile/:userId?' render={() =><ProfileContainer />}/> 
        <Route path='/Users' render={() =><UsersContainer/>}/>
        <Route path='/Music' render={() =><Music/>}/>
        <Route path='/Photo' render={() =><Photo/>}/>
        <Route path='/login' render={() =><Login/>}/>
       
        </div>
        <Footer/>
      </div>
      
    );
}}

export default App;
