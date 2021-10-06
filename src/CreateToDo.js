import React,{useState} from 'react'

export default function CreateToDo ({user,dispatch}) {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    function handleTitle (evt) {setTitle(evt.target.value)}

    function handleDescription (evt) {setDescription(evt.target.value)}

    return (
        <form onSubmit={e => {e.preventDefault();dispatch({type:'CREATE_TODO',title, description,  author: user});}}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">To Do:</label>
                <input type="text" value={title} onChange={handleTitle}  name="create-title" id="create-title" />
            </div>
            <textarea value={description} onChange={handleDescription}/>
                
            <input type="submit" value="Create" />
        </form>
    )
}
