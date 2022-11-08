import React from 'react';
import { Link } from 'react-router-dom';

const serviceCard = ({singleService}) => {

    const {_id, name, price, details, photoUrl} = singleService;
    console.log(_id, name, price, details, photoUrl)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photoUrl} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Visit: ${price}</div> 
    </div>
      <Link to={`/serviceDetails/:${_id}`}><button className="btn btn-outline btn-accent">Details</button></Link>
  </div>
</div>
    );
};

export default serviceCard;