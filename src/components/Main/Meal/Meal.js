import React from 'react';
import './Meal.css'
const Meal = (props) => {
    // console.log(props)
    const {meal} = props;
    console.log(props);
    const {strMealThumb, strMeal, strInstructions, strArea} = meal;
    

    return (
        <div className="col">
            <div className="card h-100 bg-light">
                <img src={strMealThumb} className="card-img-top w-50 mx-auto mt-4 rounded" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0, 200)}</p>
                </div>
                <div className="card-footer bg-dark d-flex justify-content-between align-items-center">
                    <small className="text-light">{strArea}</small>
                    {/* {
                        
                        meal.isDisplayed ? <button onClick={()=>props.showDetails(meal)} className="btn btn-warning">Details</button>:<button className="btn btn-danger">Displayed</button>
                    } */}
                    <div>
                    <button onClick={()=>props.showDetails(meal)} className="btn btn-warning">Details</button>
                    <button className="btn btn-danger">Added</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;