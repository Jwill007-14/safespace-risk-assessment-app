import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar(){

    return(
        <>
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src='/safespace-logo-80x80.jpeg' width='60px'/>  <b>SAFESPACE</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/'>Features</Nav.Link>
                    <Nav.Link href='/'>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="text-center" style={{backgroundColor: "black"}}>
        <img src="/safespace-business-card-750x300.jpeg" height="200px" />
        </div>      </>
        )
}

export default NavBar;