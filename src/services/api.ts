import axios from "axios"

export const api = axios.create({
    baseURL: "http://26.114.182.125:3333",
    timeout: 700,
})