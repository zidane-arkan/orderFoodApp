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
    if (action.type === 'INCREASE_ITEM_AMOUNT') {
        const updatedTotalAmount = state.totalAmount + action.item.price;
        const existItemIndex = state.items.findIndex(item => action.item.id === item.id);

        // console.log([...state.items]);
        let updatedItems;
        let updateItemAmount = {
            ...action.item,
            amount: Number(action.item.amount) + 1
        };

        updatedItems = [...state.items];
        updatedItems[existItemIndex] = updateItemAmount;
        console.log(updatedItems);

        // updatedItems = state.items.concat(updatedItems);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE_CART_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item=>item.id !== action.id);
        } else {
            let updateItem = {
                ...existingItem,
                amount: Number(existingItem.amount) - 1,
            };
            updatedItems = [...state.items];
            // console.log(updateItem);
            updatedItems[existingItemIndex] = updateItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
        // console.log(action.id);
    }
    return defaultCartState;
};

function CartProvider(props) {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const increaseItemAmount = (item) => {
        cartDispatch({ type: 'INCREASE_ITEM_AMOUNT', item: item });
    };
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
        increaseItemAmount: increaseItemAmount,
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