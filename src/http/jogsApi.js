import {$authHost} from './index'

export const getJogs = async () => {
    try {
        const {response} = await $authHost.get('api/v1/data/sync')
        const {id} = JSON.parse(localStorage.getItem('user-data'))
        const myJogs = response.jogs.filter(({user_id}) => user_id === id)
        return myJogs
    } catch (err) {
        console.log(err);
    }
}

export const createJog = async (data) => {
    try {
        const {response} = await $authHost.post('api/v1/data/jog', data)
        return response
    } catch (err) {
        console.log(err);
    }
}

export const changeJog = async (data) => {
    try {
        const {response} = await $authHost.put('api/v1/data/jog', data)
        return response
    } catch (err) {
        console.log(err);
    }
}