import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
import './header.css'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
  const {handleSignOut,user}=useAuth()
    return (
        <Navbar style={{justifyContent:'flex-start'}} sticky="top" bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand  href="#home">Medi <span style={{ color:'red',fontWeight:'900'}}>Pluse</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{flexGrow:1}} className="me-auto  header-link">
       <Typography sx={{ letterSpacing: 4, fontWeight:'900' }} mx='10px' color='white'>{user?.displayName}</Typography>
        <HashLink to="/home">Home</HashLink>
        <HashLink to="/services">Services</HashLink>
        <HashLink to="/login">Login</HashLink>
        <HashLink to="/reg">Registration</HashLink>
        <Button onClick={handleSignOut}>LogOut</Button>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;