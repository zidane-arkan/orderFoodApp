import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    increaseItemAmount: (item) => { },
    addItems: (item) => { },
    removeItem: (id) => { },
});

export default CartContext;