let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USERS_COUNT= "SET_TOTAL_USERS_COUNT";
let TOGGLE_IS_FATCHING= "TOGGLE_IS_FATCHING";

export let initialState =  {
    
    users: [ ],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage:1,
    isFatching: true
   }
   

   
let usersReducer = (state = initialState, action) =>{
 
    switch(action.type){
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u;
            })
        }

        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: false}
                }
                return u;
            })
        }

        case SET_USERS: {
        return { ...state, users: action.users
            
        }}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
       
        case TOGGLE_IS_FATCHING: {
            return {...state, isFatching: action.isFatching}
        }

    default:
        return state;
    }
}

export const followAC = (userId) =>({type:FOLLOW, userId})
export const unfollowAC = (userId) =>({type:UNFOLLOW, userId})
export const setUsersAC = (users) =>({type:SET_USERS, users})
export const setCurrentPageAC = (currentPage) =>({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) =>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toggleIsFatchingAC = (isFatching) =>({type:TOGGLE_IS_FATCHING, isFatching})
/*
export const getUsersThunkCreator =(currentPage,pageSize) =>{
    return (dispatch) => {
    dispatch(toggleIsFatching( true));
    getUser(currentPage, pageSize)
    .then(response =>{
        dispatch(toggleIsFatching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));   
         
    });
     }
}
*/

export default usersReducer;
