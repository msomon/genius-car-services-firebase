
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  }
  
  return (
    <>
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img height={30} src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#Services">Services</Nav.Link>
      <Nav.Link href="home#experts">Exparts</Nav.Link>  
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {user ? <button className='signout bg-primary' onClick={logout}>Sign Out</button> :
      <Nav.Link eventKey={2} as={Link} to="/login"> Login
      </Nav.Link>
      }
      
    </Nav>  
  </Navbar.Collapse>
  </Container>
</Navbar></>
  );
};

export default Header;