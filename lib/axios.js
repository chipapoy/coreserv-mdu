import Axios from 'axios'

const axios = Axios.create({
//     baseURL: 'https://chipapoy.online',
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'xsrfHeaderName': "X-XSRF-TOKEN"
    },
    withCredentials: true,
})

export default axios
