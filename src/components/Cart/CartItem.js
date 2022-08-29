import React from 'react';
import CarttItemClass from './CartItem.module.css';

function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  // console.log(props.amount);
  return (
    <li className={CarttItemClass['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={CarttItemClass.summary}>
          <span className={CarttItemClass.price}>{price}</span>
          <span className={CarttItemClass.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={CarttItemClass.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;