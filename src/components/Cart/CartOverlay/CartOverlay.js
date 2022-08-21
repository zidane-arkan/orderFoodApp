import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import CartModal from './CartModal';

function CartOverlay(props) {
    const portalElement = document.getElementById('overlay');
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)};
            {ReactDOM.createPortal(<CartModal>{props.children}</CartModal>, portalElement)};
        </React.Fragment>
    );
};

export default CartOverlay;