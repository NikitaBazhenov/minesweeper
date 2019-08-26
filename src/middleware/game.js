// eslint-disable-next-line
import GameWorker from 'worker-loader!../game.worker.js';

export default ({dispatch}) => {
    const worker = new GameWorker();
    worker.onmessage = ({data}) => {
        data.__worker = true;
        dispatch(data);
    };
    return next => async action => {
        next(action);
        if (!action.__worker) {
            worker.postMessage(action);
        }
    };
};