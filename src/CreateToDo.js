import React, {useState, useContext} from 'react'
import { StateContext } from './Contexts'

export default function CreatePost () {

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    
    const {state, dispatch} = useContext(StateContext)
    const {user} = state;

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleContent (evt) { setContent(evt.target.value) }

     return (
          <form onSubmit={e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title, content, author: user});} }>
             
             <div>Author: <b>{user}</b></div>

             <div>
                 <label htmlFor="create-title">Title:</label>
                 <input type="text" value={title} onChange={handleTitle} name="create-title"  id="create-title" />
             </div>

             <textarea value={content} onChange={handleContent} />
             <input type="submit" value="Create" />
         </form>   
          )
 }
 