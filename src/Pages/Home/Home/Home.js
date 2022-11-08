import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import image1 from '../../../assets/slider/doctor.jpg';
import image2 from '../../../assets/slider/doctor1.jpg';
import image3 from '../../../assets/slider/Stethoscope.jpg';
import HomeServices from '../HomeServices/HomeServices';
import Slider from '../Slider/Slider';
import SliderButton from '../SliderButton/SliderButton';

const Home = () => {

    const services = useLoaderData();
    console.log(services)

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
            <h1 className='text-center my-3'>My Services</h1>
            <div className='mx-10 lg:flex gap-2'>
                {
                    services.map(service => <HomeServices
                        key={service._id}
                        service={service}></HomeServices>)
                }
            </div>
            <Link to='/services' className="card-actions justify-center">
                <button className="btn btn-primary">See All</button>
            </Link>
        </div>
    );
};

export default Home;