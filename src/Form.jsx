import React, { useContext, useEffect, useState } from 'react'
import KhatabookContext from './Context/KhatabookContext';

const Form = () => {

  const {addTodo,edit,updateTodo} = useContext(KhatabookContext);

  const [text,setText] = useState("");
  const [amount,setAmount] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    // addTodo(text,amount);
    if(edit.isEdit)
    {
      updateTodo({
        id : edit.todo.id,
        text:text,
        amount:parseInt(amount),
      });
    }
    else{
      addTodo(text,amount);
    }
    setText("");
    setAmount("");
  }

  useEffect(()=>{
    setText(edit.todo.text);
    setAmount(edit.todo.amount);
  },[edit]);

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Text...' onChange={(e)=>setText(e.target.value)} value={text} />
        <input type="text" placeholder='Enter Amount..' onChange={(e)=>setAmount(e.target.value)} value={amount} />
        <button>Save Transaction</button>
    </form>
  )
}

export default Form;
