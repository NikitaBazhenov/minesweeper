import workerMiddleware from './middleware/worker';
import configureStore from './store';
import {
    BOARD_DATA,
    NEW_GAME,
    OPEN_ITEM,
    MESSAGE,
    MESSAGE_TYPE_ERROR
} from './constants';
import { getPossibleStep } from './solver';
import { produceWithPatches } from 'immer';

const socket = new WebSocket('wss://hometask.eg1236.com/game1/');
const store = configureStore([workerMiddleware(socket)]);
let state = {};
const onSocketMessage = e => {
    const [type, val, pass] = e.data.split(':');
    const _state = store.getState();
    switch(type) {
        case 'map':
            let itemsInRow = 0;
            const [nextState, patches] = produceWithPatches(state, draft => {
                val.split('\n').filter(el => el.trim() ? true : false)
                .forEach((el, row) => {
                    el = el.trim().split('');
                    if (row === 0) {
                        itemsInRow = el.length;
                        if (itemsInRow !== _state.itemsInRow) {
                            draft = {};
                        }
                    }
                    el.forEach((val, col) => {
                        draft[`${row}:${col}`] = val;
                    });
                });
                return draft;
            });
            state = nextState;
            store.dispatch({
                type: BOARD_DATA,
                payload: { data: patches, itemsInRow }
            });
            if (_state.aiMode) {
                let data = [];
                let row = [];
                let n = 0;
                let hasBomb = false;
                Object.keys(state).forEach(el => {
                    if (state[el] === '*') {
                        hasBomb = true;
                    }
                    if (n === _state.itemsInRow) {
                        data.push(row);
                        n = 0;
                        row = [];
                    }
                    n++;
                    row.push(state[el]);
                });
                if (hasBomb) return;
                data.push(row);
                var step = getPossibleStep(data);
                if (step) {
                    store.dispatch({
                        type: OPEN_ITEM,
                        payload: {
                            x: step.x,
                            y: step.y
                        }
                    });
                }
            }
            break;
        case 'open':
            const _v = val.trim();
            if (_v === 'OK') socket.send('map');
            else if (_v === 'You lose') {
                if (_state.aiMode) {
                    socket.send(`new ${_state.level}`);
                } else {
                    socket.send('map');
                    store.dispatch({
                        type: MESSAGE,
                        payload: {
                            text: _v,
                            type: MESSAGE_TYPE_ERROR
                        }
                    });
                }
            } else {
                socket.send('map');
                store.dispatch({
                    type: MESSAGE,
                    payload: {
                        text: `${_v}: ${pass}`
                    }
                });
            }
            // You win. The password for this level is: ThisWasEasy
            // You win. The password for this level is: NotSoMuch
            break;
        case 'new':
            socket.send('map');
            break;
        default:
            break;
    }
};

const onAppMessage = e => store.dispatch(e.data);
const onConnected = () => store.dispatch({type: NEW_GAME});
socket.addEventListener('message', onSocketMessage);
socket.addEventListener('open', onConnected);
self.addEventListener("message", onAppMessage);   