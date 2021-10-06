import UserBar from './user/UserBar'
import ToDoList from './ToDoList'
import CreateToDo from './CreateToDo';
import { useState, useReducer } from 'react';

function App() {
  const initialToDo =[
    {
      title: "TODO 1",
      description:"test",
      complete: "checked",
      dateCreated: Date(Date.now()),

    },
  ]
  
  function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            throw new Error()
    }
}
function toDoReducer (state, action) {
  switch (action.type) {
      case 'CREATE_TODO':
         const newToDo = { 
             title: action.title,
             description: action.description, 
             author: action.author,
             dateCreated:Date(Date.now()),
             complete: false,
             id: state.length
             ? Math.max(...state.map(todo => todo.id)) + 1
             : 0,
             
          }
          return [ newToDo, ...state ]
  
      case 'DELETE_TODO':
          const newList = state.filter(item => item.id !== action.id);
          return newList;
      
      case 'TOGGLE_TODO':
        return state.map((item) =>
        item.index === action.index
          ? { ...item, complete: !item.complete }
          : item
      )
       default:
          throw new Error()      
        }
        
          
}
  const [user, dispatchUser] = useReducer(userReducer,'')
  const [toDo, dispatchToDo] = useReducer(toDoReducer,initialToDo)

  return (
  <div>
     <UserBar user={user} dispatchUser={dispatchUser} />
     {user && <CreateToDo user ={user} dispatch = {dispatchToDo} />}
     <ToDoList toDo= {toDo} />
  </div>
  )
}

export default App;
