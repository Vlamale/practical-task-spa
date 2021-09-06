import { CHANGE_JOG_URL, CREATE_JOG_URL, GET_JOGS_URL } from '../const/requestUrl';
import {$authHost} from './index'

export const getJogs = async () => {
    try {
        const {data} = await $authHost.get(GET_JOGS_URL)
        return data.response
    } catch (err) {
        console.log(err);
    }
}

export const createJog = async (jogData) => {
    try {
        const {data} = await $authHost.post(CREATE_JOG_URL, jogData)
        return data.response
    } catch (err) {
        console.log(err);
    }
}

export const changeJog = async (jogData) => {
    try {
        const {data} = await $authHost.put(CHANGE_JOG_URL, jogData)
        return data.response
    } catch (err) {
        console.log(err);
    }
}