import {
    SET_LEVEL,
    NEW_GAME,
    SET_AI_MODE,
    BOARD_DATA,
    OPEN_ITEM,
    MESSAGE
} from '../constants';

export default socket => store => next => async action => {
    next(action);
    switch(action.type) {
        case SET_LEVEL:
            socket.send(`new ${action.payload}`);
            break;
        case NEW_GAME:
            socket.send(`new ${store.getState().level}`);
            break;
        case SET_AI_MODE:
            socket.send(`map`);
            break;
        case OPEN_ITEM:
            socket.send(`open ${action.payload.y} ${action.payload.x}`);
            break;
        case BOARD_DATA:
        case MESSAGE:
            postMessage(action);
            break; 
        default:
            break;
    }
};