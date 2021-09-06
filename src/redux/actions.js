import { getJogs } from "../http/jogsApi"
import {
    CHANGE_LOGIN_STATUS,
    SET_SELECTED_JOG_ID,
    SET_NEW_JOGS,
    SET_FILTER_STATUS
} from "./types"

export const changeLoginStatus = (status) => {
    return {
        type: CHANGE_LOGIN_STATUS,
        status
    }
}

export const setSelectedJogId = (id) => {
    return {
        type: SET_SELECTED_JOG_ID,
        id
    }
}

export const setNewJogs = (jogs) => {
    return {
        type: SET_NEW_JOGS,
        jogs
    }
}

export const setFilterStatus = (status) => {
    return {
        type: SET_FILTER_STATUS,
        status
    }
}

export const getJogsAction = () => {
    return async (dispatch) => {
        const { jogs } = await getJogs()
        const { id } = JSON.parse(localStorage.getItem('user-data'))
        const myJogs = jogs.filter(({user_id}) => user_id === id)
        dispatch(setNewJogs(myJogs))
        return myJogs
    }
}