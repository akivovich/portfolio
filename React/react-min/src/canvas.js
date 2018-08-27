import React from 'react';

export default function canvas(props) {
    const className = 'absolute canvas ' + (props ? props.css : 'dn');
    return <div className={className} style={{zIndex:0}} />;
};
