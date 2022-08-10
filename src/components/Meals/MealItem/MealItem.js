import React from 'react';
import MealItemClass from './MealItem.module.css';

function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li>
            <div className={MealItemClass.meal}>
                <h3>{props.name}</h3>
                <span className={MealItemClass.description}> {props.description} </span>
                <span className={MealItemClass.price}> {price} </span>
            </div>
            <div></div>
        </li>
    );
}

export default MealItem;