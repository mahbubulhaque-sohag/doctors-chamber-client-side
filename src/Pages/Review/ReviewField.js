import React from 'react';

const ReviewField = ({handleReview,handleOnBlur }) => {
    return (
        <div>
            <form onSubmit={handleReview}>
            <textarea onBlur={handleOnBlur} className="textarea textarea-error w-full" placeholder="your review" required></textarea>
            <input type='submit' value='Submit'/>
        </form>
        </div>
    );
};

export default ReviewField;