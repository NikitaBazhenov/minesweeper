import React, { memo } from 'react';
import Switch from "react-switch";

function Toggle({
    id = 'toggle-switch',
    label,
    ...props
}) {
    return (
        <label className="flex-center" htmlFor={id}>
            <Switch id={id} {...props}/>
            <span
                style={{
                    marginLeft: '0.5rem'
                }}
            >{label}</span>
        </label>
    )
}

export default memo(Toggle);