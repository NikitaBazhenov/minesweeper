import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

export default (middleware = []) => createStore(
    reducers,
    applyMiddleware(...middleware)
);