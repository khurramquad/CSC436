import React, {useContext, useEffect} from 'react'
import { Link } from 'react-navi'
import { useResource } from 'react-request-hook'
import { ThemeContext, StateContext } from './Contexts'
import{Card, Button} from 'react-bootstrap'


function ToDo ({ title, description, author, short = false , dateCreated, complete, completedOn, todoId }) {
     
     const {secondaryColor} = useContext(ThemeContext) 
     const {dispatch} = useContext(StateContext)
     console.log("ToDo rendered") 

     let processedDescription = description

     const[deletedTodo, deleteTodo] = useResource((todoId) => ({
         url: `/todos/${todoId}`,
         method:"DELETE"

     }));

     const[toggledTodo, toggleTodo] = useResource((todoId,completed) => ({
        url: `/todos/${todoId}`,
        method:"PATCH",
        data: {
            complete:completed,
            completedOn: Date.now()
        }

    }));

    useEffect(() =>{
        if(deletedTodo && deletedTodo.data){
            dispatch({type: 'DELETE_TODO', todoId:todoId})
        }

    },[deletedTodo])

    useEffect(() =>{
        if(toggledTodo){
            dispatch({type: 'TOGGLE_TODO', complete:toggledTodo.complete, completedOn:toggledTodo.completedOn})
        }
    },[toggledTodo])
 
     
     return (
        <Card>
        <Card.Body>
            <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>{title}</Link>
            </Card.Title>
            <Card.Subtitle>
            <i>Written by <b>{author}</b></i>
            </Card.Subtitle>
            <Card.Text>
                {processedDescription}
                <br/><i>Date Created: {new Date(dateCreated).toLocaleDateString('en-us')}</i><br/>
            
            </Card.Text>

            
          <input type="checkbox" checked={complete} onChange={e => {toggleTodo(todoId, e.target.checked)}} />
          <Button variant="link" onClick={(e) => {deleteTodo(todoId)}}>Delete Post</Button>
          {complete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
          <Link href={`/todo/${todoId}`}>View full ToDo</Link>
            </Card.Body>
        </Card>

 )
}

export default React.memo(ToDo);