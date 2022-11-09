import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {

    const { user } = useContext(authContext);

    const [myReviewData, setMyReviewData] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/review/${user?.displayName}`)
            .then(res => res.json())
            .then(data => setMyReviewData(data))
    }, [user])

    const handleDelete = (id, e) => {
        // e.preventDefault()
        // console.log(event.target.value)
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(restData => {
                // if(restData.deleteCount > 0){
                    toast(' successfully deleted!!');
                const remainingDatas = myReviewData.filter(review => review._id !== id)
                setMyReviewData(remainingDatas)
                // }
            })
    }


    return (
        <div>
            {
                myReviewData.length > 0 ? <div> <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                {/* <input type="checkbox" className="checkbox" /> */}
                            </label>
                        </th>

                        <th>Reviewed by</th>

                        <th> Reviews</th>
                    </tr>
                </thead>

                {
                    myReviewData?.map(data => <MyReviewTable
                        key={data._id}
                        data={data}
                        handleDelete={handleDelete}
                    ></MyReviewTable>)
                }


            </table> </div> : <p className='mt-5 text-center'>No Review</p>
            }
        </div>
    );
};

export default MyReviews;