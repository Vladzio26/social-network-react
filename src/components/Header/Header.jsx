import React from 'react';
import s from './Header.module.css';
import Firebase from "../SimpleChat/Firebase";


import {NavLink} from 'react-router-dom';
const Header =(props)=> {

    return(        
        <header className={s.header}>        
           <div className={s.logoWrapper} >          
              <div className={`${s.logo} ${s.glitch}`}></div>            
            </div>
            <div className={s.login}>
              {props.isAuthoris ?  <div>{props.login} - <button onClick={props.logout} className={s.logout} augmented-ui="tl-clip br-clip exe"> Log out -> </button></div> : <NavLink to={"/login"}>Login</NavLink>}         
            </div>

        </header>
    );
}
export default Header;