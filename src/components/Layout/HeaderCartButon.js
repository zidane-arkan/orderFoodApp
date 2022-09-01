import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import buttonClass from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCartButon(props) {
    const [isButtonAnimated, setIsButtonAnimated] = useState(false);
    const changeCartStatus = () => {
        props.changeCartHandler(true);
    };
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx);
    const totalItemAmount = cartCtx.items.reduce((curNum, item) => {
        return curNum + Number(item.amount);
    }, 0);
    const btnClasses = `${buttonClass.button} ${isButtonAnimated ? buttonClass.bump : ""}`;

    useEffect(() => {
        setIsButtonAnimated(true);
        const timer = setTimeout(() => {
            setIsButtonAnimated(false);
        }, 300);
        return () => { 
            clearTimeout(timer);
        };
    }, [cartCtx.items]);


    return (
        <button onClick={changeCartStatus} className={btnClasses}>
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