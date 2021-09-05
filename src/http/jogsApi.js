import {$authHost} from './index'

export const getJogs = async () => {
    try {
        const {data} = await $authHost.get('api/v1/data/sync')
        const {id} = JSON.parse(localStorage.getItem('user-data'))
        const myJogs = data.response.jogs.filter(({user_id}) => user_id === id)
        return myJogs
    } catch (err) {
        console.log(err);
    }
}

export const createJog = async (jogData) => {
    try {
        const {data} = await $authHost.post('api/v1/data/jog', jogData)
        return data.response
    } catch (err) {
        console.log(err);
    }
}

export const changeJog = async (jogData) => {
    try {
        const {data} = await $authHost.put('api/v1/data/jog', jogData)
        return data.response
    } catch (err) {
        console.log(err);
    }
}