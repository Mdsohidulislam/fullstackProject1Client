import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav' 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
<Navbar expand="lg">
  <Navbar.Brand>
    <Link className="navbar-brand" to='/'>React-Bootstrap</Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link>
        <Link className='nav-link mr-5 active' to='/'>Home</Link>
      </Nav.Link> 
      <Nav.Link>
        <Link className='nav-link mr-5' to='/about'>About</Link>
      </Nav.Link> 
      <Nav.Link>
        <Link className='nav-link mr-5' to='/dentalServices'>Dental Services</Link>
      </Nav.Link> 
      <Nav.Link>
        <Link className='nav-link mr-5 text-white' style={{textShadow:'0 0 3px #475062'}} to='/reviews'>Reviews</Link>
      </Nav.Link> 
      <Nav.Link>
        <Link className='nav-link mr-5 text-white'  style={{textShadow:'0 0 3px #475062'}} to='/blog'>Blog</Link>
      </Nav.Link> 
      <Nav.Link>
        <Link className='nav-link mr-5 text-white'  style={{textShadow:'0 0 3px #475062'}} to='/contactUs'>Contact Us</Link>
      </Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default NavBar;