import React from 'react'
import ToDo from './ToDo'

import { StateContext } from './Contexts'
import { useContext } from 'react/cjs/react.development'

export default function ToDoList () {
      const {state} = useContext(StateContext)
      const {todos} = state;

     return (
      <div>
       {todos.map((p, i) => <ToDo {...p} title={p.title} author={p.author} key={'post-' + i} postId={i}/>)}
      </div> 
      )
}
    
