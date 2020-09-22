import { SET_ENTRY } from '../actionTypes';

const initialState = {
    entry: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ENTRY:
            return {
                ...state,
                entry: action.entry,
            };
        default:
            return state;
    }
}
