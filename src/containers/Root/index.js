import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

function Root({ store }) {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;