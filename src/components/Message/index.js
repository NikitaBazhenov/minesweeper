import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import './index.sass';

function Message({message, type}) {
    if (!message) {
        return null;
    }
    return (
        <div className={`game-message${type? ` ${type}`:''}`}>
            <span>{message}</span>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.string.isRequired
};

export default memo(Message);