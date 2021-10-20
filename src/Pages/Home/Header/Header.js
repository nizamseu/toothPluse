import { Button, Typography } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css'
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
  const {handleSignOut,user}=useAuth();
    return (
        <Navbar style={{justifyContent:'flex-start'}} sticky="top" bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand  href="#home">TooTH<span style={{ color:'red',fontWeight:'900'}}>Pluse</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{flexGrow:1}} className="me-auto  header-link">
       <Typography sx={{ letterSpacing: 4, fontWeight:'900' }} mx='10px' color='white'>{user?.displayName}</Typography>
       
       <Typography>
        <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/appointment">Appointment</Link>
       </Typography>
        
        
        {
          (user.displayName) ?
          <Button onClick={handleSignOut}>LogOut</Button> :<HashLink to="/login">Login</HashLink>
       }
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;