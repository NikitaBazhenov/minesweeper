import {
    SET_AI_MODE,
    SET_LEVEL,
    NEW_GAME,
    OPEN_ITEM
} from '../constants';

export function setAiMode(payload) {
    return {
        type: SET_AI_MODE,
        payload
    };
} 

export function changeLevel(payload) {
    return {
        type: SET_LEVEL,
        payload
    };
}

export function newGame() {
    return {
        type: NEW_GAME
    };
}

export function onOpen(x,y) {
    return {
        type: OPEN_ITEM,
        payload: {x,y}
    };
}