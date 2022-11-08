import React from 'react';

const SingleServiceDetails = ({data}) => {
    const {photoUrl, name, price, details} = data;
    console.log(photoUrl, name, price, details)
    return (
        <div className="card  mx-20 bg-base-100 shadow-xl">
  <figure><img src={photoUrl} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Visit: ${price}</div> 
    </div>
      {/* <Link to={`/services/${_id}`}><button className="btn btn-outline btn-accent">Details</button></Link> */}
  </div>
</div>
    );
};

export default SingleServiceDetails;