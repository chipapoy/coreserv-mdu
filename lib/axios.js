import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://chipapoy.online',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
