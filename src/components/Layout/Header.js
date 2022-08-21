import React, { useContext } from 'react';
import headerClass from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButon';
// import CartContext from '../../store/cart-context';

function Header(props) {
    return (
        <React.Fragment>
            <header className={headerClass.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton changeCartHandler={props.changeCartHandler} />
            </header>
            <div className={headerClass[`main-image`]}>
                <img src={mealsImg} alt="Meals Img" />
            </div>
        </React.Fragment>
    );
}

export default Header;