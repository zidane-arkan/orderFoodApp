import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import buttonClass from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCartButon(props) {
    const changeCartStatus = () => {
        props.changeCartHandler(true);
    };
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx);
    const totalItemAmount = cartCtx.items.reduce((curNum, item) => { 
        return curNum + Number(item.amount);
    }, 0);

    return (
        <button onClick={changeCartStatus} className={`${buttonClass.button} ${buttonClass.bump}}`}>
            <span className={buttonClass.icon}>
                <CartIcon />
            </span>
            <span>Cart Meals</span>
            <span className={buttonClass.badge}>
                {totalItemAmount}
            </span>
        </button>
    );
}

export default HeaderCartButon;