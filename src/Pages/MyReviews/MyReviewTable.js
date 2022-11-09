import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviewTable = ({data , handleDelete, handleUpdate}) => {
    // const [reviews, setReviews] =useState([data])
    // console.log(reviews)

    

    return (
        // <div>
     

<tbody>
    <tr>
        <th>
            <label>
                <input onClick={()=>handleDelete(data?._id)} type="button" className=""  value='DELETE'/>
                <ToastContainer />
            </label>
        </th>
       
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={data?.picture} alt="" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{data?.name}</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                </div>
            </div>
        </td>
        <th>
            <button className="btn btn-ghost btn-xs">{data?.text}</button>
        </th>
    </tr>
</tbody>


        // </div>
    );
};

export default MyReviewTable;