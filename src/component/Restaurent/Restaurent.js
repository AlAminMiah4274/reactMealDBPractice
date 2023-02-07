import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Restaurent = () => {
    const meals = useLoaderData().meals;
    console.log(meals);
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {
                meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                ></Meal>)
            }
        </div>
    );
};

export default Restaurent;