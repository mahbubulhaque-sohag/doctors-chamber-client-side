import React from 'react';

const MyReviewTable = ({data}) => {
    console.log(data)
    return (
        // <div>
     

<tbody>
    <tr>
        <th>
            <label>
                {/* <input type="button" className=""  value='X'/> */}
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