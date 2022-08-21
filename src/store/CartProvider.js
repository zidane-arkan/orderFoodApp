import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};
const cartReducer = (state, action) => {

    if (action.type === 'ADD_CART_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        // console.log(updatedTotalAmount);
        // console.log(state);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

function CartProvider(props) {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        cartDispatch({ type: 'ADD_CART_ITEM', item: item });
        // console.log(item);
    };
    const removeItemFromCart = (id) => {
        cartDispatch({ type: 'REMOVE_CART_ITEM', id: id });
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItemToCart,
        removeItem: removeItemFromCart,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;