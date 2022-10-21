import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';



const Menu = () => {
    return (
        
             <Navbar   bg="danger" expand="lg">
        
        <Navbar.Brand className='ms-4 text-light' as={Link} to="Inicio">Benito Santos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='Inicio' className='text-light nav-link nav-item '>Inicio</NavLink>
            <NavLink to='Administrador'  className='text-light  nav-link nav-item'>Administrar</NavLink>
            
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>

        
       
          
            
        
    );
};

export default Menu;