import React, { memo, useCallback, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as BoomIcon } from './flame.svg';
import './index.sass';

function BoardItem({
    onClick,
    value,
    id,
    readOnly,
    ...props
}) {
    const [row, col] = id.split(':');
    const _onClick = useCallback(() => {
        onClick(row, col);
    }, [row, col, onClick]);

    const { val, cl } = useMemo(() => {
        switch(value) {
            case '*':
                return {
                    val: <BoomIcon/>,
                    cl: 'boom'
                };
            case '0': 
                return {
                    val: null,
                    cl: null
                };
            case '□': 
                return {
                    val: null,
                    cl: 'closed'
                };
            default:
                return {
                    val: value,
                    cl: null
                };
        }
    }, [value]);

    return (
        <div 
            {...props} 
            className={`board-item${cl ? ` ${cl}` : ''}`} 
            onClick={cl === 'closed' && !readOnly ? _onClick : null}
        >
            <div>
                { val }
            </div>
        </div>
    )
}

BoardItem.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default memo(BoardItem);