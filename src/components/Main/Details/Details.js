import React from 'react';
import './Details.css'
const Details = (props) => {
    console.log(props)
    return (
        <div className="details">
            <h5 className="details-head">Details</h5>
            <p className="meal-name">Name: </p>
        </div>
    );
};

export default Details;