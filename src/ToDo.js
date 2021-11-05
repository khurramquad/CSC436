import React, {useContext} from 'react'

import {  StateContext } from './Contexts'

export default function Post ({ title, content, author, dateCreated, complete, completedOn, postId }) {
     
     
     const {dispatch} = useContext(StateContext)
     
     return (
       <div>
          <h3>{title}</h3>
          <div>{content}</div>
          <br />
          <i>Written by <b>{author}</b></i>
          <br/><i>Date Created: {dateCreated}</i><br/>
          <input type="checkbox" onClick={e => {dispatch({type: 'TOGGLE_TODO', complete:!complete, postId: postId})}} />
          <button onClick={(e) => {dispatch({type: 'DELETE_TODO', postId: postId})}}>Delete Post</button>
          {complete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
          <hr/>
      </div> 
 )
}
