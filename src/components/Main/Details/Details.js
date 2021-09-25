import React from 'react';
import './Details.css'
const Details = (props) => {
    const {strMeal, strYoutube} = props.details;
    return (
        <div className="details card mb-3 bg-light">
            <p className="meal-name text-dark fw-bold">Name: {strMeal}</p>
            <small>view:</small>
            <a className="text-danger" href={strYoutube}>{strYoutube}</a>
        </div>
    );
};

export default Details;