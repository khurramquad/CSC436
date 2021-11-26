import React, { useContext } from 'react'
import CreateToDo from '../CreateToDo'
import UserBar from '../user/UserBar'
import Header from '../Header'
import ChangeTheme from '../ChangeTheme'
import { StateContext, ThemeContext } from '../Contexts'
import { Navbar , Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-navi'


export default function HeaderBar ({ setTheme }) {
    const theme = useContext(ThemeContext) 
    const { state } = useContext(StateContext)
    const { user } = state

return (
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><Header text="My ToDo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user.username && <Nav.Link><Link href="/todo/create">Create New ToDo</Link></Nav.Link>}
            {user.username && <Nav.Link><Link href="/users">Users Page</Link></Nav.Link>}
          </Nav>
          <React.Suspense fallback={"Loading..."}>
            <UserBar />
          </React.Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>


)
}
