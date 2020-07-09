import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://axios-training-4c3b4.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance