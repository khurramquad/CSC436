import React from 'react'

export default function ToDo ({ title, description, dateCreated,complete, dateCompleted }) {
 
    return (
         <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <i>Date Created <b>{dateCreated}</b></i>
            <br />
            <input type="checkbox" value={complete}/>
            <i>Completed {dateCompleted}</i>
        </div> 
    )

}
