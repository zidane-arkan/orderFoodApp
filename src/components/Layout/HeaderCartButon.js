import React from 'react';
import CartIcon from '../Cart/CartIcon';
import buttonClass from './HeaderCartButton.module.css';

function HeaderCartButon(props) {
    return (
        <button className={`${buttonClass.button} ${buttonClass.bump}}`}>
            <span className={buttonClass.icon}>
                <CartIcon />
            </span>
            <span>Cart Meals</span>
            <span className={buttonClass.badge}>
                0
            </span>
        </button>
    );
}

export default HeaderCartButon;