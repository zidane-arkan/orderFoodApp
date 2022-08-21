import React, { useState, useRef } from 'react';
import MealFormClass from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
  const amountMeal = useRef("1");
  const inputData = {
    id: 'amount' + props.id,
    type: "number",
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
  };
  // const changeAmountMeal = (e) => {
  //   setAmountMeal(e.target.value);
  // };
  const addMeals = (e) => {
    e.preventDefault();
    props.setMealItems(amountMeal.current.value);
  };
  return (
    <form onSubmit={addMeals} className={MealFormClass.form}>
      <Input ref={amountMeal} label="Amount" input={inputData} />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;