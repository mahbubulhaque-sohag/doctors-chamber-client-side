import React from 'react';

const Slider = ({ carousel }) => {
  const { image, id } = carousel;
  return (
    <div id={`item${id}`} className="carousel-item w-full">
      <img src={image} alt='' className="w-full" />
    </div>
  );
};

export default Slider;