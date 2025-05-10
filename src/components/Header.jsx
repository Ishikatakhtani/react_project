import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
        <>
       
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{marginRight:"10%"}} href="#">CONVERSE </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="Home" >New &Featured</Nav.Link>
            <Nav.Link  style={{fontWeight:"bolder", color:"black"}} as={Link} to="Women">Women</Nav.Link>
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="Home">Men</Nav.Link>
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="Home">Kids</Nav.Link>
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="Home">Limited Edition</Nav.Link>
            <Nav.Link style={{color:"red",fontWeight:"bolder"}} as={Link} to="Home">Sale </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
            
          </Nav>
          <Nav.Link style={{paddingRight:"3%" ,fontWeight:"bolder", color:"black"}} href="#" disabled>
              Singin
            </Nav.Link>
            <Nav.Link style={{paddingRight:"3%",fontWeight:"bolder", color:"black"}}as={Link} to="myCart">
              op2
            </Nav.Link>
            <Nav.Link style={{paddingRight:"3%",fontWeight:"bolder", color:"black"}}href="#" disabled>
              op2
            </Nav.Link>
            <Nav.Link style={{paddingRight:"3%",fontWeight:"bolder", color:"black"}}href="#" disabled>
              op2
            </Nav.Link>
            
          <Form  className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{fontWeight:"bolder", backgroundColor:"black"
               
              }}
              
            />
          
            {/* <Button variant="outline-success">Search</Button> */}
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
        </>
    )
}
export  default Header