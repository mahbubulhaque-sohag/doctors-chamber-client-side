import React from 'react';
import image1 from '../../../assets/slider/doctor.jpg';
import image2 from '../../../assets/slider/doctor1.jpg';
import image3 from '../../../assets/slider/Stethoscope.jpg';
import Slider from '../Slider/Slider';
import SliderButton from '../SliderButton/SliderButton';

const Home = () => {

    const carouselData = [
        {
            image: image1,
            id: 1
        },
        {
            image: image2,
            id: 2
        },
        {
            image: image3,
            id: 3
        },
    ]
    return (
        <div className='mt-3'>
             {/* home carousel start*/}
            <div className="carousel ">
                {
                    carouselData.map(carousel => <Slider
                        key={carousel.id}
                        carousel={carousel}></Slider>)
                }
            </div>
            <div className="flex justify-center py-2 gap-2">
                {
                    carouselData.map(carousel => <SliderButton
                        key={carousel.id}
                        carousel={carousel}></SliderButton>)
                }
            </div>
            {/* home carousel end */}
        </div>
    );
};

export default Home;