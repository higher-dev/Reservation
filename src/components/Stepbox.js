import React from 'react';

const Stepbox = ( props ) => {
    const { is_filled, content, number, hasNext } = props;
    return (
        <>
            <div>
                <p>STEP {number}</p>
                <p>{content}</p>
            </div>
            {hasNext && 
                <></>
            }
        </>
    );
};

export default Stepbox;