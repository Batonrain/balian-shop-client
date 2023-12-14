import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://balianshop.com:8000/api'
})

export default httpClient 