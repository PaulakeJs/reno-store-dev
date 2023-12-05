import axios from 'axios'

export const axiosManager = axios.create({
    baseURL:'http://localhost:5000',
    headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

