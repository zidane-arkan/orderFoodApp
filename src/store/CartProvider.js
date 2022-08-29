import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};
const cartReducer = (state, action) => {

    if (action.type === 'ADD_CART_ITEM') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

        const existItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existItem = state.items[existItemIndex];
        
        let updatedItems = state.items.concat(action.item); 
        let updateExistItemAmount;
        
        if (existItem) {
            updateExistItemAmount = {
                ...existItem,
                amount: Number(existItem.amount) + Number(action.item.amount), 
            };
            updatedItems = [...state.items];
            console.log(state.items);
            updatedItems[existItemIndex] = updateExistItemAmount;
        }
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