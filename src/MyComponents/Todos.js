import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef'
import React from 'react'
import { hydrate } from 'react-dom'
import {TodoItem} from './TodoItem';

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
          return(<div key={todo.sno}><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/></div>)
      })}
      

    </div>
  )
}

export default Todos