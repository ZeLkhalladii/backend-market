import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav,NavDropdown } from 'react-bootstrap';



 const NavBar = () => {
		
        
    return (

    <div>
           
           <Navbar collapseOnSelect expand="lg"  style={{backgroundColor: "green",marginBottom:150}} variant="dark">
           <Navbar.Brand href="#home">
           </Navbar.Brand> 
     
  <Navbar.Brand href="#home">MedicalShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/Seller/Products">Products</Nav.Link>
      <Nav.Link href="http://localhost:3000/Seller/Info">Profile</Nav.Link>
      <NavDropdown title="categorie" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">vaccine</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Chaussure médicale</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">bavette</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">home</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>   


    </div>
        
    )
}



export default NavBar;
