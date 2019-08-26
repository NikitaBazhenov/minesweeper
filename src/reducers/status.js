import {
    SET_STATUS,
    INIT_STATUS,
    NEW_GAME,
    SET_LEVEL
} from '../constants';

export default function (state = INIT_STATUS, { type, payload }){
    switch (type) {
        case NEW_GAME:
        case SET_LEVEL:
            return INIT_STATUS;
        case SET_STATUS:
            return payload;
        default:
            return state;
    }
}