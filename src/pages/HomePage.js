import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import ToDoList from '../ToDoList'

export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ todos, getToDos ] = useResource(() => ({
        url: '/todo',
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))
    /* useEffect(getToDos, [])
    useEffect(() => {
    if (todos && todos.data) {
            dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
        }
    }, [todos])*/
    
/*     useEffect(() =>{
                if(state.user.access_token) {
                    getToDos()
                }
            }, [])
            useEffect(() =>{
                getToDos()
            }, [state.user.access_token])
            useEffect(() => {
            if (todos && todos.isLoading === false && todos.data) {
                console.log(todos.data)
                    dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos })
                }
            }, [todos])
        
        const { data, isLoading } = todos; */

        useEffect(() =>{
            getToDos()
        }, [state.user.access_token])
    
        useEffect(() => {
        if (todos && todos.isLoading === false && todos.data) {
            console.log(todos.data)
                dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos })
            }
        }, [todos])
        const { data, isLoading } = todos;

        return (
            <>
              {isLoading && 'Loading ToDos...'} <ToDoList />
            </>
        )     

}
