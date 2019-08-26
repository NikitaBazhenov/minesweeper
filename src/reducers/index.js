import { combineReducers } from 'redux';
import aiMode from './aiMode';
import level from './level';
import board from './board';
import itemsInRow from './itemsInRow';
import message from './message';

export default combineReducers({
    aiMode,
    level,
    board,
    itemsInRow,
    message
});