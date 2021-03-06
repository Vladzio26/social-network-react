import axios from "axios";




const instance = axios.create({
    withCredentials:true,
    baseURL:  `https://social-network.samuraijs.com/api/1.0`,
    headers:{
        "API-KEY":"2d76971f-6f6e-4bb5-959d-005a0b0acbb7"
    }
})
/*
export  const userAPI = {
    getUser(currentPage =1, pageSize =10){
    return instance.get (`/users?page=${currentPage}&count=${pageSize}`)
    .then(response => 
        { return response.data;
         });

        }
}
*/


export const authAPI = {
    me() {
        return instance.get (`auth/me`);

         
    },
    login(email, password, rememberMe =false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}






export const profileAPI={
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status});
    },
}