import React from 'react';
import s from './Header.module.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import userPhoto from "./../../assets/user.png";


import {NavLink} from 'react-router-dom';


const Header =(props)=> {


    return(
         
        <header className={s.header}>
        
           <div className={s.logoWrapper} >
          
              <div className={`${s.logo} ${s.glitch}`}></div>
            
            </div>
            <div className={s.login}>
              {props.isAuthoris ?  props.login:  <NavLink to={"/login"}>Login</NavLink>}
          
            </div>
        </header>
    );
}

export default Header;

/*
<div class={s.stars}></div>

<div class={s.twinkling}></div>

<div class={s.clouds}></div>*/
