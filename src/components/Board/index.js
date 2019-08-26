import React, { memo } from 'react';

function Board({
    data,
    itemsInRow,
    Item,
}) {
    return (
        <div 
            className="game-board"
            style={{
                width: itemsInRow * 30 + 'px'
            }} 
        >
            {
                data.map((id,k) => (
                    <Item 
                        key={id} 
                        id={id} 
                    />
                ))
            }
        </div>
    )
}

export default memo(Board);