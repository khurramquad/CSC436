import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'

import ToDo from '../ToDo'

export default function ToDoPage ({ id }) {
    const [ todo, getToDo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'get'
    }))
    useEffect(getToDo, [id])

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