import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';
import Typical from 'react-typical'
import store_cust from '../../redux/state';
//{ friendElement }
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

import Firebase from "../SimpleChat/Firebase";





const Navbar = (props) => {

    return(
        <nav className={`${s.nav} ${s.demo1}`} augmented-ui="tl-clip-y br-clip-y exe">
          <ul>
            <li><NavLink to = '/Info'>Profile</NavLink></li>
            <li><NavLink to = '/'>Messages</NavLink></li>
            <li><NavLink to = '/Feed'>News</NavLink></li>
            
            <li><a href = '/Music'>Music</a></li>
            
            
            <li><NavLink to = '/Photo'>Photos</NavLink></li>
            <li><NavLink to = '/Games'>Games Studio</NavLink></li>
            <li className={s.last}><a href = '#'>Settings</a></li>
            <li><button onClick={() => {Firebase.auth().signOut().then(window.location = "/")}}>LogOut</button></li>
     
          </ul>
        
          <div className={s.friend}>
                  <h2>Friend:</h2>
                 
          </div>

          <div>


          <div className={s.loader_container}>
          <div className={s.loader_4}></div>
          </div>
          

          <div className={s.writer}>
        <Typical
                steps={['Hello!', 12000, 'How are you?', 8000, 'You need to do a break!', 15000, 'You can do it!', 90000]}
                loop={Infinity}
                wrapper="p"
                
            />
        </div>

    
                </div>
        </nav>

    )
}

export default Navbar;