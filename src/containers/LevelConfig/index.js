import React from 'react';
import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import { changeLevel } from '../../actions/game';
import { ReactComponent as BeginnerIcon } from './child.svg';
import { ReactComponent as MiddleIcon } from './student.svg';
import { ReactComponent as ProIcon } from './scientist.svg';
import { ReactComponent as NinjaIcon } from './cartoon.svg';
import './index.sass';

const options = [
    { value: '1', label: 'Beginner', icon: <BeginnerIcon/>},
    { value: '2', label: 'Middle', icon: <MiddleIcon/> },
    { value: '3', label: 'Pro', icon: <ProIcon/> },
    { value: '4', label: 'Ninja', icon: <NinjaIcon/> }
];

const Value = ({icon, children}) => (
    <div className="flex-center">{icon} {children}</div>
)

const SingleValue = ({children, ...props}) => (
    <components.SingleValue {...props}>
        <Value icon={props.data.icon}>{children}</Value>
    </components.SingleValue>
)

const Option = ({children, ...props}) => (
    <components.Option {...props}>
        <Value icon={props.data.icon}>{children}</Value>
    </components.Option>
)

const Components = {SingleValue, Option};
const onChange = e => changeLevel(e.value);

export default connect(
    state => ({
        value: options.find(el => el.value === state.level),
        className: "level-config",
        components: Components,
        options: options,
        isSearchable: false,
    }),
    {
        onChange: onChange
    }
)(Select);