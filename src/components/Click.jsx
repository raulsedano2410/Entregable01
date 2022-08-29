import React from 'react';

const Click = (props) => {
    return (
        <button onClick={props.click} className="click" >
            <i
                style={{ color: props.randomColor }}
                className="fa-solid fa-arrow-rotate-left">
            </i>
        </button>
    );
};

export default Click;