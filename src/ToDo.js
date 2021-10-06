import React from 'react'


export default function ToDo ({ title, description, dateCreated, dateCompleted, dispatch, index}) {
  function handleDelete (index) {
    var elem = document.getElementById(index);
    elem.parentNode.removeChild(elem);
  }
 
    return (
         <div id={index}>
        
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <i>Date Created: {dateCreated}</i>
            <br />
            <i>Completed {dateCompleted}</i>  
            <input type="checkbox" onClick={e => {}} />
             <button onClick={e => {handleDelete(index);}}>DELETE</button>
            
          </div> 
    )

}
