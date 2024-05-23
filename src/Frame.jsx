import React, { useContext } from 'react'
import KhatabookContext from './Context/KhatabookContext';

const Frame = () => {

  const {todos} = useContext(KhatabookContext);

  const totalBalance = todos.reduce((p,c)=>{
    return p+c.amount;
  },0);

  const totalIncome = todos.filter(todo=>todo.amount > 0).reduce((p,c)=>{
    return p+c.amount;
  },0);

  const totalExpense = todos.filter(todo=>todo.amount < 0).reduce((p,c)=>{
    return p+c.amount;
  },0);

  return (

    <div className="frame">

        <div className="box">
          <h1>Total Income : {totalIncome}</h1>
        </div>

        <div className="box">
          <h1>Total Expense : {totalExpense}</h1>
        </div>

        <div className="box">
          <h1>Total Amount : {totalBalance}</h1>
        </div>

    </div>
  )
}

export default Frame;
