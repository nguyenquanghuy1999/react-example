import axios from "axios";

export const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

httpRequest.interceptors.request.use((config) => {
    return config;
})


httpRequest.interceptors.response.use(
    (res) => res,
    (error) => {
        //handle refresh token here
        console.log(error);
    }
)