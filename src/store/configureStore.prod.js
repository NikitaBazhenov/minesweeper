import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

export default (middleware = []) => createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middleware)
);