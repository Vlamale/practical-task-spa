import { GET_TOKEN_URL, GET_USER_DATA_URL } from '../const/requestUrl'
import { $host, $authHost } from './index'

export const getToken = async () => {
    try {
        const { data } = await $host.post(GET_TOKEN_URL, { uuid: "hello" })
        const response = data.response
        localStorage.setItem('token', JSON.stringify(response.access_token))
        return response.access_token
    } catch (err) {
        console.log(err);
    }
}

export const getUserData = async () => {
    try {
        const { data } = await $authHost.get(GET_USER_DATA_URL)
        const response = data.response
        localStorage.setItem('user-data', JSON.stringify(response))
        return response
    } catch (err) {
        console.log(err);
    }
}