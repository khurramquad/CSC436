function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }
            case 'FETCH_USERS':
                return action.users
                
        default:
            return state;
    }
}

  function todosReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            console.log("create_todo")
          const newToDo = { 
              id: action.id,
              title: action.title,
              description: action.description, 
              author: action.author,
			  dateCreated: action.dateCreated,
              complete: false,
              completedOn: undefined
            }
            return [ newToDo, ...state ]
        case 'TOGGLE_TODO':
            return state.map((p) => {
                if(p.id === action.id) {
                    p.complete = action.complete;
                    p.completedOn = action.completedOn;
                }
                return p;
            })
        case 'DELETE_TODO':
            return state.filter((p) => p.id !== action.todoId)
        case 'FETCH_TODOS':
            console.log(action.todos)
            return action.todos

        default:
           return state;
    }
  }

  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todosReducer(state.todos, action)
    }
}
