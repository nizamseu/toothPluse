import { Repeat } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box, display, grid } from '@mui/system';
import React from 'react';
import './Footer.css';
import logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Box className='footer' sx={{
          gridTemplateColumns:{ xl: 'repeat(4,1fr)', 
          lg:'repeat(4,1fr)',
          md:'repeat(3,1fr)',
          sm:'repeat(2,1fr)',
          xs : 'repeat(1,1fr)'},

          display:'grid',
         
        }}>
       {/* 1st Column  */}
          <Box>

            <Box
           style={{display:'flex',margin:'10px'}}
            >
              <img width='50px' src={logo} alt="" />
              <Typography mx='10px' variant='h5'>Medi <span style={{ color:'red',fontWeight:'900'}}>Pluse</span></Typography>

            </Box>
            <Typography style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Optio iure aliquid quae eius consequatur distinctio similique nobis corporis, mollitia ipsa dolores vero sunt labore itaque nemo at quaerat molestiae, velit inventore. Numquam ullam, odit eligendi tempora reiciendis in commodi totam fugit! Eligendi distinctio saepe 
              neque tenetur sapiente asperiores dolorum dicta.
            </Typography>
            <Typography style={{marginTop:'20px',fontSize:'25px',fontWeight:'lighter'}}>
              Trusted by <span style={{fontWeight:'bold'}}>15,000</span> People
            </Typography>
          </Box>


 {/* 2nd colum */}
          <Box className='usefulLink'>
            <Typography sx={{fontSize:'25px'}}>
                Useful <span style={{color:'#00BCD5'}}>Links</span>
            </Typography>
            <Box sx={{my:'20px',fontSize:'16px'}}>
                <Link to='/home'>Home</Link> <br />
                <Link to='/about'>About</Link><br />
                <Link to='/services'>Services</Link><br />
                <Link to='/about'>Health Info</Link><br />
                <Link to='/'>Appointment</Link><br />
            </Box>
          </Box>

{/* 3rd column */}
          <Box className='services'>
            <Box style={{textAlign:'left',lineHeight: '30px'}}>
              <li> Dental care</li>
              <li> Cleaning Facilities</li>
              <li>  Whitening Care</li>
              <li> Dental Implement</li>
            </Box>
          </Box>

          {/* 4th column */}
          <Box  className='services'>
            <Box>
                <Box>
                  <Typography sx={{fontSize:'25px'}}>Contact <span style={{color:'#00BCD5'}}>Address</span></Typography>
                  <Typography sx={{my:'15px'}}>
                  Road 4, Block-B,<br /> Rampura Banasree, Dhaka-1230
                  </Typography>
                </Box>

                <Box sx={{my:'15px'}}>
                <Typography sx={{fontSize:'25px'}}>Call <span style={{color:'#00BCD5'}}>Us</span></Typography>
                <Typography> +8801827612791</Typography>
              </Box>
            
            </Box>
            
          </Box>
        </Box>
    );
};

export default Footer;