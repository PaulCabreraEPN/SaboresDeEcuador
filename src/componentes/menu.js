import React from 'react';
import "./menu.css";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Menu = () => {
    const navigate = useNavigate();

    const handleLoginClickPro = () => {
        navigate('/Productos');
    };

    const handleLoginClickProm = () => {
        navigate('/Promociones');
    };

    const handleLoginClickSob = () => {
        navigate('/Sobre_Nosotros');
    };

    const handleLoginClickI = () => {
        navigate('/' );
    };

  return (
    <div class='menu'>
        <Navbar className="navbar-custom" variant="dark" expand="lg">
        
        <Navbar.Brand href="#home">COFFEE & DREAMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="navbar-collapse-left">
            <Nav.Link className="nav-link-custom" onclick={handleLoginClickI}>Inicio</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickPro}>Menú</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickProm}>Promociones</Nav.Link>
            <Nav.Link className="nav-link-custom" onClick={handleLoginClickSob}>Sobre Nosotros</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#pricing">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
    
  )
}
