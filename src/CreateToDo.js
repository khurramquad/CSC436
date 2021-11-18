import React, {useState, useEffect, useContext} from 'react'
import { StateContext } from './Contexts'
import {useResource} from 'react-request-hook'
import { useNavigation } from 'react-navi'

export default function CreateToDo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    
    const [todo , createToDo ] = useResource(({ title, description, author }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, author, dateCreated: Date.now()}
    }))


    const navigation = useNavigation() 


    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    function handleCreate () {
        createToDo({ title, description, author: user })
        
    }
    useEffect(() => {
        if (todo && todo.data) {
            dispatch({ type: 'CREATE_TODO',title: todo.data.title, id:todo.data.id, description: todo.data.description, author:user })
            navigation.navigate(`/todo/${todo.data.id}`)
        }
 }, [todo])

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }

     return (
          <form onSubmit={e => {e.preventDefault(); handleCreate();} }>
             
             <div>Author: <b>{user}</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" />
             </div>

             <textarea value={description} onChange={handleDescription} />
             
             <input type="submit" value="Create" />
         </form>   
          )
 }
 