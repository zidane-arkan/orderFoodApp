import React from 'react';
import headerClass from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButon';

function Header(props) {
    return (
        <React.Fragment>
            <navbar className={headerClass.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton />
            </navbar>
            <div className={headerClass[`main-image`]}>
                <img src={mealsImg} alt="Meals Img" />
            </div>
        </React.Fragment>
    );
}

export default Header;