import {
    CHANGE_LOGIN_STATUS,
    SET_SELECTED_JOG_ID,
    SET_NEW_JOGS,
    SET_FILTER_STATUS
} from "./types"

const initialState = {
    isAuth: localStorage.getItem('token') ? true : false,
    selectedJogId: null,
    jogs: [],
    filterStatus: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LOGIN_STATUS:
            return { ...state, isAuth: action.status }
        case SET_SELECTED_JOG_ID:
            return { ...state, selectedJogId: action.id }
        case SET_NEW_JOGS:
            return { ...state, jogs: [...action.jogs] }
        case SET_FILTER_STATUS:
            return {...state, filterStatus: action.status}
        default:
            return { ...state }
    }
}

export default rootReducer