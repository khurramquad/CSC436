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
              title: action.title,
              content: action.content, 
              author: action.author,
			  dateCreated:Date(Date.now()),
              complete: false,
              completedOn: undefined
            }
            return [ newToDo, ...state ]
        case 'TOGGLE_TODO':
            return state.map((p, i) => {
                if(i === action.postId) {
                    p.complete = action.complete;
                    p.completedOn = Date.now();
                    console.log(p)
                }
                return p;
            })
        case 'DELETE_TODO':
            return state.filter((p,i) => i !== action.postId)
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
