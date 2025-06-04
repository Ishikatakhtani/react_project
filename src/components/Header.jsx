import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
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
            
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="/Home" >New &Featured</Nav.Link>
            <Nav.Link  style={{fontWeight:"bolder", color:"black"}} as={Link} to="/Women">Women</Nav.Link>
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="/Men">Men</Nav.Link>
            <Nav.Link style={{fontWeight:"bolder", color:"black"}} as={Link} to="/Limitededition">Limited Edition</Nav.Link>
            <Nav.Link style={{color:"red",fontWeight:"bolder"}} as={Link} to="/Sale">Sale </Nav.Link>
           
            
          </Nav>
          <Nav.Link style={{paddingRight:"3%" ,fontWeight:"bolder", color:"black"}} as={Link} to="/Wishlist">
                <FaHeart color="red" size={24} />
              
            </Nav.Link>
            <Nav.Link style={{paddingRight:"3%",fontWeight:"bolder", color:"black"}}as={Link} to="/myCart">
                <FaCartShopping size={24} />

            </Nav.Link>
            <Nav.Link style={{paddingRight:"3%",fontWeight:"bolder", color:"black"}}as={Link} to="/Login">
              Logout
            </Nav.Link>
            <Nav.Link style={{paddingRight:"3%",fontWeight:"bolder", color:"black"}}as={Link} to="/search">
              Search</Nav.Link>
            
            
          <Form  className="d-flex">
          
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
        </>
    )
}
export  default Header