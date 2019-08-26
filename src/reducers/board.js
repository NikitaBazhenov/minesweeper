import {
    BOARD_DATA,
    SET_LEVEL
} from '../constants';
import { applyPatches } from 'immer';

export default function (state = {}, { type, payload }){
    switch (type) {
        case SET_LEVEL:
            return {};
        case BOARD_DATA:
            return applyPatches(state, payload.data);
        default:
            return state;
    }
}