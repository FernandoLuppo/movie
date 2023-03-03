import axios from "axios"

export const Api = () => {
    return axios.create({
        baseURL: "https://luppotw-movies-wxm4.onrender.com"
    })
}