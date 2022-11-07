import React from 'react';

const AddService = () => {

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const details = form.details.value;
        const price = form.price.value;
        console.log(name, photoUrl, details, price);
    }

    return (
        <div className='mx-20'>
            <h2 className='text-red-600 text-2xl my-3'>Add More Services</h2>
            <form onSubmit={handleAddService}>
            <div className='grid grid-cols-2 '>
            <label>
                Name:
                <input className='border-2' type="text" name="name" />
            </label>
            <label>
                Photo Url:
                <input className='border-2' type="text" name="photoUrl" />
            </label>
            <label>
                Price:
                <input className='border-2' type="text" name="price" />
            </label>
            <label>
                Details:
                <input className='border-2' type="text" name="details" />
            </label>
            </div>
            <input className='mt-3' type="submit" value="Submit" />
        </form>
        </div>
    );
};

export default AddService;