import axios from "axios";


export  const getUser = (currentPage =1, pageSize =10) =>{
    return axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{
        withCredentials:true,

    })


}

const instance = axios.create({
    withCredentials:true,
    headers:{
        "API-KEY":"2d76971f-6f6e-4bb5-959d-005a0b0acbb7"
    }
})


export const profileAPI={
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`status`, {status:status});
    },
}