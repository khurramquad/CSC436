import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import UserList from '../UserList'

export default function UsersHomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ users, getUsers ] = useResource(() => ({
        url: '/user',
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

        useEffect(() =>{
            getUsers()
        }, [state.user.access_token])
    
        useEffect(() => {
        if (users && users.isLoading === false && users.data) {
            console.log(users.data)
                dispatch({ type: 'FETCH_USERS', Users: users.data.users })
            }
        }, [users])
        const { data, isLoading } = users;

        return (
            <>
              {isLoading && 'Loading Users...'} <UserList />
            </>
        )     

}