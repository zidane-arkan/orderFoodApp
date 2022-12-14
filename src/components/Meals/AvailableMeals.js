import React, { useState } from 'react';
import AvailableMealsClass from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
function AvailableMeals(props) {
    const [mealsItem, setMealsItem] = useState([{}]);
    const mealsItemHandler = (newMeal) => {
        setMealsItem((prevMeal) => {
            console.log(mealsItem);
            return [newMeal, ...prevMeal];
        }); 
    };

    let mealsList = DUMMY_MEALS.map((meal) => {
        return (
            <MealItem
                key={`ABC_${meal.id}`}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                mealsItemHandler={mealsItemHandler}
            />
        );
    });
    return (
        <section className={AvailableMealsClass.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;