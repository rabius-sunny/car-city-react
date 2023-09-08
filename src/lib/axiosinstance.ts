import axios from 'axios'

const baseURL = 'http://localhost:6060'
const instance = axios.create({
  baseURL,
  timeout: 15000
})

export default instance
