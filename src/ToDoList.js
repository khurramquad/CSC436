import React from 'react'
import ToDo from './ToDo'

export default function ToDoList ({toDo = []}) {
 return (
  <div>
   {toDo.map((p, i) => <ToDo {...p} key={'post-' + i} />)}
  </div>
    )
}
