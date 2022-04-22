import { LOAD_USER_DATA, UNLOAD_USER_DATA } from '../actions/user.actions'

const initialState = {
    name: '',
    email: '',
    password: '',
    token: '',
    isLogged: false,
    isLoading: false,
    error: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_DATA:
            state = { ...action.payload };
            return state;
        case UNLOAD_USER_DATA:
            state = { ...initialState };
            return state;
        default:
            return state
    }
}