import axios from 'axios'
// // import { Message } from 'element-ui'
// // import store from '@/store'
// // import { getAuth, getTenantid } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API + '/' + process.env.H5_API, // api的base_url
  timeout: 10000, // request timeout
  dataType: 'html',
  withCredentials: false
})

export default service
