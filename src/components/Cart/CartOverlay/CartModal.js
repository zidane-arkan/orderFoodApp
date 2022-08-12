import React from 'react';
import CartModalClass from './CartModal.module.css';

function CartOverlay(props) {
    return (
        <section className={CartModalClass.modal}>
            <div className={CartModalClass.content}>
                {props.children}
            </div>
        </section>
    );
}

export default CartOverlay;