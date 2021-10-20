import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
    <Box>   
     <h1 className='my-3 text-info text-center'>About Us</h1>
        <Box sx={{
            display:'grid',
            gridTemplateColumns:{
                lg:'repeat(2,1fr)',
                md:'repeat(2,1fr)',
                sm:'repeat(1,1fr)',
                sx:'repeat(1,1fr)',
                },
            justifyContent:'center',
            alignItems:'center',
            my:3,
            mx:'auto',
        }}>
            
            <Box>
                <img width="100%" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-03.jpg" alt="" />
            </Box>
            <Box className='text-center p-3'>
            <Typography className="text-center" mx='10px'   variant='h5'>TooTH<span style={{ color:'red',fontWeight:'900'}}>Pluse</span>
            </Typography>

            <Typography sx={{my:3}}>
             <h4 className='text-danger'>You are always safe with us.</h4>
            <h1 style={{margin:"35px 5px" ,fontSize:"20",fontWeight:'900'}}>We are ready to <br /> <span className='text-danger'>HELP</span> any time.</h1>
            </Typography>

            <Typography sx={{textAlign:'justify',p:4,}}>
            Welcome to the ToothPluse. We are proud to deliver excellent care to our patients as well as to provide the clinical setting to educate our students.

            Treatment is provided by students enrolled in two undergraduate programs (Dentistry and Dental Hygiene) and five graduate programs (dentists studying to become specialists). Also, our faculty members provide care in the same way as in regular private practice.
            </Typography>

            </Box>
        </Box>    
    </Box>
    );
};

export default About;