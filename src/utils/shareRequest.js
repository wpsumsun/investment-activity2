import axios from 'axios'
// // import { Message } from 'element-ui'
// // import store from '@/store'
// // import { getAuth, getTenantid } from '@/utils/auth'

// create an axios instance
// https://hmjwechattest.jahwa.com.cn/GetWXJssdkSign.aspx?url=www.baidu.com&timestamp=11111&randomcode=1111
// https://hmjwechattest.jahwa.com.cn/GetWXJssdkSign.aspx?url=${location.href}&timestamp=${ new Date().getTime()}&randomcode=${Math.random().toString().slice(-6)}
const service = axios.create({
  baseURL: 'https://hmjwechattest.jahwa.com.cn/GetWXJssdkSign.aspx', // api的base_url
  timeout: 10000, // request timeout
  dataType: 'html',
  withCredentials: false
})

export default service
