import UserBar from './user/UserBar'
import ToDoList from './ToDoList'
import CreateToDo from './CreateToDo';

function App() {
  const toDo =[
    {
      title: "TODO 1",
      description:"test",
      complete: "checked",
      dateCreated: Date(Date.now()),

    },
  ]
  return (
  <div>
     <UserBar />
     <CreateToDo user ='Abu'/>
     <ToDoList toDo= {toDo} />
  </div>
  )
}

export default App;
