import React from 'react';

const HomeServices = ({service}) => {

    const {_id, name, price, photoUrl, details} = service;
    return (
        <div className="card lg:w-4/12 lg:card-side bg-base-100 shadow-xl">
            <figure><img className='' src={photoUrl} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p className='text-sm'>Visit: ${price}</p>

                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default HomeServices;