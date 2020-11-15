import axios from 'axios'

const service = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

service.interceptors.response.use((response) => {
  return response.data
})

export default service
