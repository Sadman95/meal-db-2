import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [searched, setSearched] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals);
            setSearched(data.meals);
        })
    }, [])
  
    // console.log(meals)
    const displayMeals = (event) => {
        const searchedText = event.target.value;
        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchedText.toLowerCase()))
        // console.log(matchedMeals);
        setSearched(matchedMeals);
    }

    const [mealinfo, setMealinfo] = useState([]);

    const showDetails = (mealInfo) => {
        const addedMeal = [...mealinfo,mealInfo];
        setMealinfo(addedMeal)
        console.log(addedMeal)
    }
    return (
        <>
            <div className="input-group mb-3 search-group">
                <input onChange={displayMeals} id="search-field" type="text" className="form-control" placeholder="rice" aria-label="Search field" aria-describedby="button-addon2"/>
                <button className="btn btn-danger" type="button" id="btn-search">Search</button>
            </div>
            <div className="display-section">
                <div className="row row-cols-lg-2 p-2 g-4">
                    {/* {
                        console.log(meals)
                    }
                    {
                        console.log(searched)
                    } */}
                    {
                        searched.map(meal => <Meal showDetails={showDetails} key={meal.idMeal} meal={meal}></Meal>)
                    }
                </div>
                <div>
                    <h5>Details</h5>
                    {
                        mealinfo.map(detail => <Details details={detail}></Details>)
                    }
                </div>
            </div>
        </>
    );
};

export default Meals;