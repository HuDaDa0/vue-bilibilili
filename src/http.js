import axios from 'axios'

const service = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

service.interceptors.request.use(config => {
  if (localStorage.getItem('id') && localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default service
