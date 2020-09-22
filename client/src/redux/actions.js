import { CHECK_SESSION, LOGIN, LOGOUT, SET_ENTRY } from './actionTypes';
import firebase from '../config/firebase.config';

export const checkSession = () => {
    return (dispatch, getState) => {
        firebase.auth().onAuthStateChanged(user => {
            dispatch({
                type: CHECK_SESSION,
                isLoading: false,
                user: user ? user : null,
            });
        });
    };
}

export const login = (email, password) => {
    return async (dispatch, getState) => {
        const userResponse = await firebase.auth().signInWithEmailAndPassword(email, password);

        dispatch({
            type: LOGIN,
            isLoading: false,
            user: userResponse.user,
        });
    };
}

export const logout = () => ({
    type: LOGOUT,
    payload: null,
});

export const setEntry = (entry) => ({
    type: SET_ENTRY,
    entry,
});
