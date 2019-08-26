import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';

export default (middleware = []) => {
    const store = createStore(
        reducers,
        applyMiddleware(...middleware, logger)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(reducers);
        });
    }
    return store;
};