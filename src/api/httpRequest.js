import axios from "axios";

export const httpRequest = axios.create({
    baseURL: "http://localhost:3000/",
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