import React from 'react'

export default function CreateToDo ({user}) {
    return (
         <form onSubmit={e => e.preventDefault()}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">To Do:</label>
                <input type="text" name="create-title" id="create-title" />
            </div>
            <textarea>
                Description
            </textarea>
            <input type="submit" value="Create" />
        </form>
    )
}
