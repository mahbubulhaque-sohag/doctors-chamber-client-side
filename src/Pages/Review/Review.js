import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewList from './ReviewList';
import { Link, useNavigate } from 'react-router-dom';
import ReviewField from './ReviewField'

const Review = ({ data }) => {
    const { user, loading } = useContext(authContext);
    const [text, setText] = useState('');
    const [reviewData, setReviewData] = useState([]);
    const navigate = useNavigate();
    // console.log(reviewData)

    const reviewInfo = {
        text: text,
        name: user?.displayName,
        picture: user?.photoURL,
        serviceName: data?.name,
        serviceImage: data?.photoUrl
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
                // loading(false)
                // navigate('/review')
            })
    }

    const handleOnBlur = (event) => {
        const text = event.target.value;
        console.log(text)
        setText(text)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${data?.name}`)
            .then(res => res.json())
            .then(data => {

                setReviewData(data)
            })
    }, [reviewData])
    return (
        <div className='mx-20'>
            {
                reviewData ? <div className='mx-20'>
                <div>
                    <h2 className='mt-5 text-3xl'>All reviews about: {reviewInfo.serviceName}</h2>
                </div>
                <div>
                    <table className="mx-20">
    
                        <thead>
                            <tr>
                                <th>
                                    {/* <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label> */}
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
                    
                    <h2>Want to add your review?</h2>
                    <Link to='/login'>Login</Link>
                    {/* <Link to='/reviewField'>Review</Link> */}
                    </>
                }
            </div>  : <p>No Review</p>
            }
        </div>
    );
};

export default Review;