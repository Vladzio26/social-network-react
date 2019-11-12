import {createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import messages from "./messages";
import users from "./users";
import chatReducer from "./store";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
 
    messages,
    users
})


let store = createStore( reducers, applyMiddleware(thunkMiddleware) );


export default store;