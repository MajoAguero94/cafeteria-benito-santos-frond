import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const Menu = () => {
    return (
        
             <Navbar   bg="danger" expand="lg">
        
        <Navbar.Brand className='ms-4 text-light' href="#home">Cafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Inicio</Nav.Link>
            <Nav.Link href="#link"  className='text-light'>Administrar</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>

        
       
          
            
        
    );
};

export default Menu;