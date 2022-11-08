import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    const [services, serServices] = useState({});
    const handleAddService = event =>{
        event.preventDefault();
        console.log(services)
        fetch('http://localhost:5000/services',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            toast('Services added successfully');
            event.target.reset();
        })

    }

    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newServices = {...services};
        newServices[field] = value;
        serServices(newServices);

    } 

    return (
        <div className='mx-20'>
            <h2 className='text-red-600 text-2xl my-3'>Add More Services</h2>
            <form onSubmit={handleAddService}>
            <ToastContainer />

            <div className='grid grid-cols-2 '>
            <label>
                Name:
                <input onBlur={handleInputBlur} className='border-2' type="text" name="name" />
            </label>
            <label>
                Photo Url:
                <input onBlur={handleInputBlur} className='border-2' type="text" name="photoUrl" />
            </label>
            <label>
                Price:
                <input onBlur={handleInputBlur} className='border-2' type="text" name="price" />
            </label>
            <label>
                Details:
                <input onBlur={handleInputBlur} className='border-2' type="text" name="details" />
            </label>
            </div>
            <input className='mt-3' type="submit" value="Submit" />
        </form>
        </div>
    );
};

export default AddService;