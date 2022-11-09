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

    const handleDelete =(id)=>{
        // console.log(event.target.value)
        fetch(`http://localhost:5000/review/${id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(restData => {
            // if(restData.deleteCount > 0){
                const remainingDatas = myReviewData.filter(review => review._id !== id)
                setMyReviewData(remainingDatas)
            // }
        })
    }
    return (
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

{
    myReviewData?.map(data=> <MyReviewTable
    key={data._id}
    data={data}
    handleDelete={handleDelete}
    ></MyReviewTable>)
}

            
</table>
        </div>
    );
};

export default MyReviews;