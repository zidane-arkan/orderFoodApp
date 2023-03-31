import React, { useEffect, useState } from 'react';
import AvailableMealsClass from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS =
    [
        {
            "id": "m1",
            "name": "Sushi",
            "description": "Finest fish and veggies",
            "price": 22.99
        },
        {
            "id": "m2",
            "name": "Schnitzel",
            "description": "A german specialty!",
            "price": 16.5
        },
        {
            "id": "m3",
            "name": "Barbecue Burger",
            "description": "American, raw, meaty",
            "price": 12.99
        },
        {
            "id": "m4",
            "name": "Green Bowl",
            "description": "Healthy...and green...",
            "price": 18.99
        }
    ]
    ;

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch('https://mymeals-http-default-rtdb.asia-southeast1.firebasedatabase.app/mymeals.json');
            const mealsData = await response.json();
            if (!response.ok) {
                throw new Error("Failed to get data");
            }
            const mealsFetch = [];
            for (const key in mealsData) {
                mealsFetch.push({
                    id: key,
                    name: mealsData[key].name,
                    description: mealsData[key].description,
                    price: mealsData[key].price
                });
            }
            setMeals(mealsFetch);
            console.log(mealsFetch);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => { fetchData(); }, []);

    const [mealsItem, setMealsItem] = useState([{}]);
    const mealsItemHandler = (newMeal) => {
        setMealsItem((prevMeal) => {
            console.log(mealsItem);
            return [newMeal, ...prevMeal];
        });
    };

    let mealsList = meals.map((meal) => {
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
};

export default AvailableMeals;