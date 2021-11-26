import React, {useContext, useEffect} from 'react'
import { Link } from 'react-navi'
import { useResource } from 'react-request-hook'
import { ThemeContext, StateContext } from './Contexts'
import{Card, Button} from 'react-bootstrap'


function ToDo ({ title, description, author, short = false , dateCreated, complete, completedOn, todoId }) {
     
     const {secondaryColor} = useContext(ThemeContext) 
     const {dispatch} = useContext(StateContext)
     const {state} = useContext(StateContext);
     const {user} = state;
    
     console.log("ToDo rendered") 

     let processedDescription = description




      
     const[deletedTodo, deleteTodo] = useResource((todoId) => ({
         url: `/todo/${todoId}`,
         headers: {"Authorization": `${state.user.access_token}`},
         method:"delete"

     }));



     const [toggledTodo, toggleTodo] = useResource((todoId, completed) => ({
        url: `/todo/update/${todoId}`,
        method: "post",
        headers: {"Authorization": `${state.user.access_token}`},
        data: {
            complete:completed,
            completedOn: Date.now()
        }
    }));

    useEffect(() =>{
    
        if(deletedTodo && deletedTodo.data){
            console.log("Dispatch")
            dispatch({type: 'DELETE_TODO', todoId: user.todoId})
        }

    },[deletedTodo])

    useEffect(() => {
        if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
            dispatch({type: 'TOGGLE_TODO', complete:toggledTodo.data.complete, completedOn:toggledTodo.data.completedOn, todoId})
        }
    }, [toggledTodo])
 
     
     return (
        <Card>
        <Card.Body>
            <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>{title}</Link>
            </Card.Title>
            <Card.Subtitle>
            <i>Written by <b>{user.username}</b></i>
            </Card.Subtitle>
            <Card.Text>
                {processedDescription}
                <br/><i>Date Created: {new Date(dateCreated).toLocaleDateString('en-us')}</i><br/>
            
            </Card.Text>

            
          <input type="checkbox" checked={complete} onChange={e => {toggleTodo(todoId, e.target.checked)}} />
          <Button variant="link" onClick={(e) => {deleteTodo(todoId);e.preventDefault();}}>Delete Post</Button>
          {complete && <><br/><i>Completed on: {new Date(completedOn).toLocaleDateString('en-us')}</i><br/></>}
          <Link href={`/todo/${todoId}`}>View full ToDo</Link>
            </Card.Body>
        </Card>

 )
}

export default React.memo(ToDo);