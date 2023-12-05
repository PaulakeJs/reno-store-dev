import { axiosManager } from "./axiosManager";

// register user 

export const NewUser = async(payload)=>{
    try {
        const response = await axiosManager.post('/api/users/new',payload)
        return response.data
    } catch (error) {
        return error.message
    }
}

// login user 

export const SigninUser = async (payload)=>{
    try {
        const response = await axiosManager.post('/api/users/login',payload)
        return response.data
    } catch (error) {
        return error.message
    }
}

// get current user 
export const CurrentUser = async () => {
    try {
        const response = await axiosManager.get('/api/users/current-user')
        return response.data
    } catch (error) {
        return error.message
    }
}