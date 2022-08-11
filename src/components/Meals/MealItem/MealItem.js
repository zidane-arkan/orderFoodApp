import React from 'react';
import MealItemClass from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li id={props.id} className={MealItemClass.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={MealItemClass.description}> {props.description} </div>
                <div className={MealItemClass.price}> {price} </div>
            </div>
            <div>
                <MealItemForm id={props.id}  />
            </div>
        </li>
    );
}

export default MealItem;