import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfoMeals from '../InfoMeals';
import { getAllMeal } from '../Services/Actions/mealActions';

const HomeMeal = () => {

    const { meals } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllMeal())
    },[dispatch]);

    return (
        <div>
            <h1 className='text-center font-medium my-4'>Meals are available</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
            {
                meals.slice(0,9).map(meal => <InfoMeals
                    key={meal.idMeal}
                    meal={meal}
                ></InfoMeals>)
            }
        </div>
        </div>
    );
};

export default HomeMeal;