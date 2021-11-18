function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

  function todosReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
          const newToDo = { 
              id: action.todoId,
              title: action.title,
              description: action.description, 
              author: action.author,
			  dateCreated: action.dateCreated,
              complete: false,
              completedOn: undefined
            }
            return [ newToDo, ...state ]
        case 'TOGGLE_TODO':
            return state.map((p, i) => {
                if(p.id === action.todoId) {
                    p.complete = action.complete;
                    p.completedOn = Date(Date.now());
                    console.log(p)
                }
                return p;
            })
        case 'DELETE_TODO':
            return state.filter((p,i) => p.id !== action.todoId)
        case 'FETCH_TODOS':
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
