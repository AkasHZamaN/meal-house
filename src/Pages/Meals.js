import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfoMeals from './InfoMeals';
import { getAllMeal } from './Services/Actions/mealActions';

const Meals = () => {

    const {isLoading, meals, error} = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllMeal())
    },[dispatch]);

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                {
                    meals.map(meal => <InfoMeals
                    key={meal.idMeal}
                    meal={meal}
                    ></InfoMeals>) 
                }
            </div>
            
        </div>
    );
};

export default Meals;