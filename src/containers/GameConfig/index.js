import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AIConfig from '../AIConfig';
import LevelConfig from '../LevelConfig';
import { newGame } from '../../actions/game';
import { ReactComponent as NewGameIcon } from './update-arrows.svg';
import './index.sass';

function GameConfig({newGame}) {
    return (
        <div className="game-config flex-center">
            <LevelConfig/>
            <div className="separator"></div>
            <AIConfig/>
            <div className="separator"></div>
            <NewGameIcon className="new-game" onClick={newGame}/>
        </div>
    )
}

GameConfig.propTypes = {
    newGame: PropTypes.func.isRequired
};

export default connect(
    null,
    { newGame }
)(GameConfig);