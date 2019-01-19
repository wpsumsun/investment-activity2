import axios from 'axios'
// // import { Message } from 'element-ui'
// // import store from '@/store'
// // import { getAuth, getTenantid } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'https://hmjwechat.jahwa.com.cn' + '/' + 'h5_kaimenhong_hmj/', // api的base_url
  timeout: 10000, // request timeout
  dataType: 'html',
  withCredentials: false
})

export default service
