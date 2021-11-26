import React from 'react'
import ToDo from './ToDo'

import { StateContext } from './Contexts'
import { useContext } from 'react'

export default function ToDoList () {
      const {state} = useContext(StateContext)
      const {todos} = state;
///       {todos.map((p, i) => <ToDo {...p} short={true} title={p.title} description ={p.description} author={p.author} key={'todo-' + i} todoId={p.id} dateCreated = {p.dateCreated}/>)}

     return (
      <div>
            {todos.map((p, i) => <ToDo {...p} short={true} title={p.title} author={p.author} key={'todo-' + i} todoId={p._id} dateCreated = {p.dateCreated}/>)}
      </div> 
      )
}
    
