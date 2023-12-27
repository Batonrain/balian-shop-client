import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://localhost:7043/api'
})

export default httpClient 