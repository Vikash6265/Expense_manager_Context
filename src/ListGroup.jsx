import React, { useContext } from 'react'
import ListItem from './ListItem'
import KhatabookContext from './Context/KhatabookContext'

const ListGroup = () => {

  const {todos} = useContext(KhatabookContext);

  return (
    <ul class="ListGroup">
        {
          todos.map((todo)=><ListItem key={todo.id} todo={todo}/>)
        }
    </ul>
  )
}

export default ListGroup
