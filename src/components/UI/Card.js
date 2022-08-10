import React from 'react';
import CardClass from './Card.module.css';

function Card(props) {
    let classCustom = `${CardClass.card}`;
    return (
        <div className={classCustom}>
            {props.children}
        </div>
    );
}

export default Card;