import React from 'react';
import MealFormClass from './MealItemForm.module.css';
import Input from '../../UI/Input';

function MealItemForm(props) {
  const inputData = {
    id: 'amount'+ props.id,
    type: "number",
    min: '1',
    max: '5',
    step: '1', 
    defaultValue: '1'
  };
  return (
    <form className={MealFormClass.form}>
      <Input label="Amount" input={inputData} />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;