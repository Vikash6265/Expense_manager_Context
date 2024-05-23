import React, { useContext } from 'react';
import KhatabookContext from './Context/KhatabookContext';

const ListItem = ({todo}) => {

  const {deleteTodo,editTodo} = useContext(KhatabookContext)

  return (
    <li class="ListItem">
        <span id="one">
          <h2>{todo.text} : {todo.amount}</h2>
        </span>
        <span>
            <button onClick={()=>editTodo(todo)}>Edit</button>
            <button id="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </span>
    </li>
  )
}

export default ListItem
