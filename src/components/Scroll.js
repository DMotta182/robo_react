import React from 'react';

const Scroll = (props) => {
    return (
        <div className='pb4' style={{ overflow: 'scroll', height: '60vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;