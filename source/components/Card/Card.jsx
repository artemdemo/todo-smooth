import React from 'react';

import './Card.less';

const Card = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    );
};

export default Card;
