import {
    BOARD_DATA,
    SET_LEVEL
} from '../constants';

export default function (state = 0, { type, payload }){
    switch (type) {
        case SET_LEVEL:
            return 0;
        case BOARD_DATA:
            return payload.itemsInRow;
        default:
            return state;
    }
}