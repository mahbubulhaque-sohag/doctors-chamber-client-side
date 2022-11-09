import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewList from './ReviewList';
import { Link } from 'react-router-dom';
import ReviewField from './ReviewField'

const Review = ({ data }) => {
    const { user } = useContext(authContext);
    const [text, setText] = useState('');
    const [reviewData, setReviewData] = useState([])
    // console.log(data)

    const reviewInfo = {
        text: text,
        name: user?.displayName,
        picture: user?.photoURL,
        serviceName: data.name,
        serviceImage: data.photoUrl
    }

    const handleReview = event => {
        event.preventDefault();
        console.log(reviewInfo);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast('Review added successfully');
                event.target.reset();
            })
    }

    const handleOnBlur = (event) => {
        const text = event.target.value;
        console.log(text)
        setText(text)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${data.name}`)
            .then(res => res.json())
            .then(data => {

                setReviewData(data)
            })
    }, [reviewData])
    return (
        <div>
            <div>
                <h2>All reviews about: {reviewData.serviceName}</h2>
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
                        reviewData.map(data => <ReviewList key={data._id} reviewData={data} />)
                    }
                </table>
            </div>
            {
                user?.uid ? <>
                <ReviewField handleOnBlur={handleOnBlur} handleReview={handleReview}></ReviewField>
                </> :
                <>
                <h2>Want to give your review?</h2>
                <Link to='/review'>Review</Link>
                </>
            }
        </div>
    );
};

export default Review;