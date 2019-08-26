import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Board from '../Board';
import BoardMessage from '../BoardMessage';
import './index.sass';

function BoardWrap({ level }) {
    return (
        <div className={`board-wrap level${level}`}>
            <Board/>
            <BoardMessage/>
        </div>
    )
}

BoardWrap.propTypes = {
    level: PropTypes.string.isRequired
};

export default connect(
    state => ({
        level: state.level
    }),
    {}
)(BoardWrap);