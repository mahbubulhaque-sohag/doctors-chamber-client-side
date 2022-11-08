import React from 'react';
import {useLoaderData} from "react-router-dom";
import SingleServiceDetails from './SingleServiceDetails';
import Review from '../Review/Review'

const ServiceDetails = () => {
      

    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <SingleServiceDetails data={data}></SingleServiceDetails>
         <Review></Review>
            
        </div>
    );
};

export default ServiceDetails;