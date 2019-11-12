let SET_USER_DATA = "SET_USER_DATA";


export let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuthoris: false
};

const authReducer = ( state = initialState, action ) => {

  
    switch (action.type) {
        case SET_USER_DATA:

            return {
              ...state,
              ...action.data,
              isAuthoris:true
            }
        
    }
  return state;
}




export const setUserData = (userId, email, login) =>({type:SET_USER_DATA, data:{userId, email,login }})


export default authReducer;