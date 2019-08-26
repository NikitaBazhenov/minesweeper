import {
    SET_AI_MODE
} from '../constants';

export default function (state = false, { type, payload }){
    switch (type) {
        case SET_AI_MODE:
            return payload;
        default:
            return state;
    }
}