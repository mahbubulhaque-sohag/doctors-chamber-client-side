import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewList from './ReviewList';

const Review = ({data}) => {
    const {user} = useContext(authContext);
    const [text, setText] = useState('');
    const [reviewData, setReviewData] = useState([])
    console.log(data)
   
    const reviewInfo = {
        text: text,
        name: user?.displayName,  
        picture: user?.photoURL,
        serviceName: data.name,
        serviceImage: data.photoUrl
    }
   
    const handleReview = event =>{
        event.preventDefault();
        console.log(reviewInfo);
        fetch('http://localhost:5000/reviews',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            toast('Review added successfully');
            event.target.reset();
        })
    }

    const handleOnBlur =(event)=>{
        const text = event.target.value;
        setText(text)
    }

    useEffect( ()=>{
        fetch(`http://localhost:5000/reviews/${data.name}`)
        .then(res => res.json()) 
        .then(data => {
            
            setReviewData(data)
        })
    },[reviewData])
    return (
        <div>
            <div>
                <h2>All reviews about: {reviewData.serviceName}</h2>
                
                {/* {
                    reviewData.map(data => <ReviewList key={data._id} reviewData={data}/>)
                } */}
                
            </div>
<div>

            <table className="table w-full">
         
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Reviewed by</th>
             
              <th> Reviews</th>
            </tr>
          </thead>
          {/* <ReviewList></ReviewList> */}
          {
                    reviewData.map(data => <ReviewList key={data._id} reviewData={data}/>)
                }
        </table>
</div>        
            <form onSubmit={handleReview}>
            <ToastContainer />
            <textarea onBlur={handleOnBlur} className="textarea textarea-secondary w-full" type='text' name='review' placeholder="your review" required></textarea>
            <button className="btn btn-outline btn-secondary">Submit</button>
            </form>
        </div>
    );
};

export default Review;