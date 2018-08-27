import React from 'react';

export default function Cell(props) {
    let value = (props.value == null) ? '' : props.value;
    return <button className='square' onClick={(evt) => props.onClick(evt)} >{value}</button>;
};