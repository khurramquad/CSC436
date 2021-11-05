import React, {useState, useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';

import MyName from './MyName'
import UserBar from './user/UserBar'
import CreateToDo from './CreateToDo'
import ToDoList from './ToDoList'
import appReducer from './reducers';


import { StateContext } from './Contexts';

function App() {

  const [ todos, getToDos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] })

  useEffect(getToDos, [])

  useEffect(() => {
      if (todos && todos.data) {
          dispatch({ type: 'FETCH_TODOS', todos: todos.data })
      }
  }, [todos])

  
  

  const {user} = state;



  

  // useEffect(() => {
  //   if (user) {
  //      document.title = `${user}’s Blog` 
  //    } else {
  //      document.title = 'Blog'
  //  }
  // }, [user])

  return (
    <div>
     
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          
          
          <UserBar />
          <br/><br/><hr/><br/> 
          {user && <CreateToDo /> }
          <ToDoList />
        </StateContext.Provider>
    </div>
  )
}

export default App;
