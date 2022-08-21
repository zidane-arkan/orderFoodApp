import React,{useContext} from 'react';
import MealItemClass from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx);

    const price = `$${props.price.toFixed(2)}`;
    const setMealItems = (amount) => { 
        const dataMeal = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        };
        cartCtx.addItems(dataMeal);
    };
    return (
        <li id={props.id} className={MealItemClass.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={MealItemClass.description}> {props.description} </div>
                <div className={MealItemClass.price}> {price} </div>
            </div>
            <div>
                <MealItemForm setMealItems={setMealItems} id={props.id}  />
            </div>
        </li>
    );
}

export default MealItem;