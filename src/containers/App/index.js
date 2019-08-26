import React, { memo } from 'react';
import BoardWrap from '../BoardWrap';
import GameConfig from '../GameConfig';
import './index.sass';

function App() {
    return (
        <div className="game-wrap">
            <div className="game-top-bar">
                <GameConfig/>
            </div>
            <BoardWrap/>
        </div>
    )
}

export default memo(App);