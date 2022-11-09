import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReviews = () => {

    const { user } = useContext(authContext);

    const [myReviewData, setMyReviewData] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/review/${user?.displayName}`)
            .then(res => res.json())
            .then(data => setMyReviewData(data))
    }, [user])
    return (
        <div>
            <table className="table w-full">

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

{
    myReviewData?.map(data=> <MyReviewTable
    key={data._id}
    data={data}></MyReviewTable>)
}

            
</table>
        </div>
    );
};

export default MyReviews;