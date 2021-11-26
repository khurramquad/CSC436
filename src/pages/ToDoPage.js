import React, { useEffect , useContext } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from '../Contexts'
import { Link } from 'react-navi'

import ToDo from '../ToDo'

export default function ToDoPage ({ todoId }) {
    const {state} = useContext(StateContext);

    const [ todo, getToDo ] = useResource(() => ({
        url: `/todo/${todoId}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
        
    }))
    useEffect(getToDo, [todoId])

    return (
        <div>
            {(todo && todo.data)
                ? <ToDo {...todo.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>

        </div>
    )
}