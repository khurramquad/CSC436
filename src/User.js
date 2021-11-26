import React, {useContext, useEffect} from 'react'
import { Link } from 'react-navi'
import { useResource } from 'react-request-hook'
import { ThemeContext, StateContext } from './Contexts'
import{Card, Button} from 'react-bootstrap'


function User ({ username, userId }) {

  const {secondaryColor} = useContext(ThemeContext) 
  const {dispatch} = useContext(StateContext)
  const {state} = useContext(StateContext);
  const {user} = state;
    return (
        <Card>
        <Card.Body>
            <Card.Title><Link style={{ color: secondaryColor }} href={`/users/${userId}`}>{user.username}</Link>
            </Card.Title>
            <Card.Subtitle>
            <i>User ID: <b>{user.userId}</b></i>
            </Card.Subtitle>
          <Link href={`/users/${userId}`}>View full User ToDo</Link>
            </Card.Body>
        </Card>

 )
}

export default React.memo(User);