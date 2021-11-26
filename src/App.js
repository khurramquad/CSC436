import React, {useState, useReducer, useEffect} from 'react';
import { useResource } from 'react-request-hook';

import MyName from './MyName'
import UserBar from './user/UserBar'
import CreateToDo from './CreateToDo'
import ToDoList from './ToDoList'
import appReducer from './reducers';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';
import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import ToDoPage from './pages/ToDoPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import UserPage from './pages/UsersHomePage';
import UsersHomePage from './pages/UsersHomePage';



import { ThemeContext, StateContext } from './Contexts';

function App() {



  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] })
  const [ theme, setTheme ] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
 })

 const routes = mount({
  '/': route({ view: <HomePage /> }),
  'todo/create':route({ view: <CreateToDo /> }),
  '/todo/:id': route(req => {
      return { view: <ToDoPage id={req.params.id} /> }
  }),
  '/users': route({ view: <UsersHomePage /> }),
  '/users/:id': route(req => {
    return { view: <UserPage id={req.params.id} /> }
}),
})

 

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
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
                <HeaderBar setTheme={setTheme} />
                <hr />
                <View />
            </Container>
            </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
