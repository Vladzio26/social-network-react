import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { getUsersThunkCreator, followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFatchingAC } from "../../redux/users-reducer";

import axios from "axios";






let mapStateToProps = (state) => {
    
    return {
        login: state.auth.login,
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFatching:(isFatching) => {
            dispatch(toggleIsFatchingAC(isFatching))
        }
    }
}


export default connect ( mapStateToProps, mapDispatchToProps)(Users);
