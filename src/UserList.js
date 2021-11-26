import React from 'react'
import User from './User'

import { StateContext } from './Contexts'
import { useContext } from 'react'

export default function UserList () {
      const {state} = useContext(StateContext)
      const {users} = state;

     return (
      <div>
       {users.map((u, i) => <User {...u} username={u.username} key={'user-' + i} userId={u.id} password={u.password}/>)}
      </div> 
      )
}