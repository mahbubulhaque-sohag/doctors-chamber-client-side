import React from 'react';

const SliderButton = ({ carousel }) => {

    const { id } = carousel;

    return (
        <div>
            <a href={`#item${id}`} className="btn btn-xs">{id}</a>
        </div>
    );
};

export default SliderButton;