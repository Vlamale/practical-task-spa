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