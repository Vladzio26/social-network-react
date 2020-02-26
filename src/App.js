import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import Feeds from './components/Feeds/News';
import { connect } from 'react-redux';
import {initialize} from './redux/app-reducer';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
//import { withRouter } from "react-router";

//import Login from "./components/Login/Login_fire/Login_fire";
import Music from './components/Music/Music';
import ChatContainer from './components/SimpleChat/ChatContainer';
import Photo from './components/Photo/Photo';
import Footer from './components/Footer/Footer';

import './stars.scss';
import { compose } from 'redux';
import Preloader from './components/common/Preloader';
import Feed from './components/Feed/Feed';
import News from './components/Feeds/News';
import Game from './components/Games/Game';
import Lab from "./components/Feeds/Lab";


import { BrowserRouter as Router, Link, Switch, withRouter } from 'react-router-dom';
import Firebase, {auth, provider} from './components/SimpleChat/Firebase';

import Home from "./components/Chat_Firebase_New/Home/Home";
import Login from "./components/Chat_Firebase_New/Auth/Login";
import Register from "./components/Chat_Firebase_New/Auth/Register";
import Firebase_Profile from "./components/Firebase_Profile/Firebase_Profile.js";

class App extends React.Component {

  constructor(props){
		super(props);
		this.state = {user: null}
		this.logOutUser = this.logOutUser.bind(this);
	}

  logOutUser = () => {
		Firebase.auth().signOut()
			.then(window.location = "/");
	}

  componentDidMount() {
    this.props.initialize();
    console.log(this.state.user)
    auth.onAuthStateChanged(user => {
      
			if(user){
				this.setState({
					user
				});
			}
		});






   }

    render(){
      
      if (!this.props.initialize){
        debugger
      return    <Preloader/>
      }

    return (
      
      <div className = 'grid-wrapper '>
        <HeaderContainer />
        <Navbar  />

        <div className="content demo0" augmented-ui="tl-clip-y br-clip-y exe" >
     
        <Route path='/dialogs' render={ () =><ChatContainer/>}/>
        

       
        <Route path='/profile/:userId?' render={() =><ProfileContainer />}/> 
        <Route path='/Users' render={() =><UsersContainer/>}/>
        <Route path='/Music' render={() =><Music/>}/>
        <Route path='/Photo' render={() =><Photo/>}/>
        
        <Route path='/Games' render={() =><Game/>}/>

        <Route path='/feed' render={() =><Feed user={this.state.user} />}/>
        <Route path='/News' render={() =><News/>}/>
        <Route path='/Lab' render={() => <Lab/> }/>
        



          <Switch>
          <Route path='/Info' exact render={()=><Firebase_Profile user={this.state.user}/>} />
						<Route path="/" exact render={() => <Home user={this.state.user}/>} />
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route component={NoMatch} />
					</Switch>



        </div>
        <Footer/>
        
      </div>
      
    );
}}

const NoMatch = ({location}) => <div></div>;

const mapStateToProps = (state)=>({
  initialized:state.app.initialize
})

export default connect(mapStateToProps,{initialize})(App);