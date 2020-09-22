import { CHECK_SESSION, LOGIN, LOGOUT } from '../actionTypes';

const initialState = {
    isLoading: true,
    user: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHECK_SESSION:
            return {
                ...state,
                isLoading: action.isLoading,
                user: action.user,
            };
        case LOGIN:
            return {
                ...state,
                isLoading: action.isLoading,
                user: action.user,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}
