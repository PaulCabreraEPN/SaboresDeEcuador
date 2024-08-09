import React from 'react';
import "./menu.css";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Menu = () => {

  return (
    <div class='menu'>
        <Navbar className="navbar-custom" variant="dark" expand="lg">
        
        <Navbar.Brand href="#home">COFFEE & DREAMS</Navbar.Brand>
      
    </Navbar>
    </div>
    
  )
}
