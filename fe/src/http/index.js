import axios from 'axios'

const instance = axios.create({
  timeout: 1000 * 12
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.baseURL = 'http://127.0.0.1:7001'

instance.interceptors.response.use((res) => {
  console.log(res)
  if (res.status === 200) {
    return res.data
  } else {
    return res
  }
})

export default instance
