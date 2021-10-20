import { Button, Typography } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
  const {handleSignOut,user}=useAuth();
    return (
        <Navbar style={{alignItems:'center',justifyContent:'flex-start'}} sticky="top" bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand  style={{fontWeight:'900'}}>TooTH<span className='text-danger'>Pluse</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{flexGrow:1,alignItems:'center'}} className="me-auto  header-link">
       <Typography className='text-danger' sx={{ letterSpacing: 4, fontWeight:'900' }} mx='10px' color='white'>{user?.displayName}</Typography>

       <Typography>
        <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/about">About Us</Link>
       </Typography>
        
        
        {
          (user.displayName) ?
          <Button onClick={handleSignOut}>LogOut</Button> :<Link to="/login">Login</Link>
       }
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;