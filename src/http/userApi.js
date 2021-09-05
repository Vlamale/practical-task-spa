import { $host, $authHost } from './index'

export const getToken = async () => {
    try {
        const { data } = await $host.post('api/v1/auth/uuidLogin', { uuid: "hello" })
        const response = data.response
        localStorage.setItem('token', JSON.stringify(response.access_token))
        return response.access_token
    } catch (err) {
        console.log(err);
    }
}

export const getUserData = async () => {
    try {
        const { data } = await $authHost.get('api/v1/auth/user')
        const response = data.response
        localStorage.setItem('user-data', JSON.stringify(response))
        return response
    } catch (err) {
        console.log(err);
    }
}