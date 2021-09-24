import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        // setMeals(meals)
    }, [])
    console.log(meals)
    const displayMeals = (event) => {
        const searchedText = event.target.value;
        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchedText.toLowerCase()))
        // console.log(matchedMeals);
        if(matchedMeals){
            setMeals(matchedMeals);
        }

    }
    return (
        <>
            <div className="input-group mb-3 search-group">
                <input id="search-field" onChange={displayMeals} type="text" className="form-control" placeholder="rice" aria-label="Search field" aria-describedby="button-addon2"/>
                <button className="btn btn-danger" type="button" id="btn-search">Search</button>
            </div>
            <div className="display-section">
                <div className="row row-cols-lg-2 p-2 g-4">
                    {
                        console.log(meals)
                    }
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                    }
                </div>
                <Details></Details>
            </div>
        </>
    );
};

export default Meals;