import React from 'react';
import './Stepbox.scss';

const Stepbox = ( props ) => {
    const { is_filled, content, number, hasNext } = props;
    return (
        <div className="align-items-center">
            <div className={`${is_filled ? 'fill-box' : 'no-fill-box'} stepbox-layout`}>
                <span>STEP {number}</span>
                <span className='content'>{content}</span>
            </div>
            {hasNext && 
                <div className='triangle' />
            }
        </div>
    );
};

export default Stepbox;