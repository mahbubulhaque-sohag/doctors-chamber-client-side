import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [allService, setAllService] = useState([]);
    console.log(allService)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setAllService(data))
    } ,[])
    return (
        <div className='mx-20'>
            <h2 className='text-3xl my-3'>This is my all services</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                {
                  allService.map(singleService =><ServiceCard
                  key={singleService._id}
                  singleService={singleService}></ServiceCard>)  
                }
            </div>
        </div>
    );
};

export default Services;