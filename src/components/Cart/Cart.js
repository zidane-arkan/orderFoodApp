import React, { useContext } from 'react';
import CartClass from './Cart.module.css';
import CartOverlay from './CartOverlay/CartOverlay';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    // const cartItems = [{
    //     id: 'm1',
    //     name: 'Sushi',
    //     amount: 2,
    //     price: 22.99,
    // }];
    const cartAddItemHandler = (item) => {
        cartCtx.increaseItemAmount(item);
    };
    const cartRemoveItemHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartLists = <ul className={CartClass['cart-items']}>
        {cartCtx.items.map((item) => {
            // return <li>1</li>;
            return (
                <CartItem
                    key={`ABC__${item.id}`}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={cartAddItemHandler.bind(null,item)}
                    onRemove={cartRemoveItemHandler.bind(null, item.id)}
                />
            );
        })}
    </ul>;
    const changeCartStatus = () => {
        props.changeCartHandler(false);
    };
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    return (
        <CartOverlay onClick={changeCartStatus}>
            {cartLists}
            <div className={CartClass.total}>
                <span>Total Amount</span>
                <span>${totalAmount.toString()}</span>
            </div>
            <div className={CartClass.actions}>
                <button onClick={changeCartStatus} className={CartClass['button--alt']}>Close</button>
                <button className={CartClass.button}>Order</button>
            </div>
        </CartOverlay>
    );
}

export default Cart;