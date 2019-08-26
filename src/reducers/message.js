import {
    MESSAGE,
    NEW_GAME,
    SET_LEVEL
} from '../constants';

const init = {
    text: '',
    type: null
};

export default function (state = init, { type, payload }){
    switch (type) {
        case MESSAGE:
            return {
                ...state,
                ...payload
            };
        case NEW_GAME:
        case SET_LEVEL:
            return init;
        default:
            return state;
    }
}