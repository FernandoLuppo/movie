import axios from "axios"

export const Api = () => {
    return axios.create({
        baseURL: "https://luppotw-movies-api.onrender.com"
    })
}