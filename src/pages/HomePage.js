import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import ToDoList from '../ToDoList'

export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ todos, getToDos ] = useResource(() => ({
        url: '/todos',
        method: 'get'
    }))
    useEffect(getToDos, [])
    useEffect(() => {
    if (todos && todos.data) {
            dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
        }
    }, [todos])
    const { data, isLoading } = todos;
    return (
        <>
          {isLoading && 'Loading ToDos...'} <ToDoList />
        </>
    )
}
