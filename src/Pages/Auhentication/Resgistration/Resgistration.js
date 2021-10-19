import { Input, Typography,Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
const Resgistration = () => {
    const {setInputData,createNewUser,inputData}=useFirebase();
    

    const HandleOnBlur =(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
      
    }
    
    const handleRegistration=(e)=>{
        
        createNewUser()
        e.preventDefault();
        e.target.reset()
    }
  
    return (
        <Box sx={{
            display:'flex',
            height:'100vh',
            justifyContent:'center',
            alignItems:'center',
            }}>
        <Box>
            <Box sx={{
                width:'350px',
                padding:'20px',
               borderRadius:'10px',
                boxShadow: '10px 10px 25px gray',
            }}>
                <Box sx={{my:'10px'}}>
                    <h3>Register new account</h3>
                    <Typography>Access to the most powerfull tool in the entire design and web industry.</Typography>
                </Box>
                <form onSubmit={handleRegistration}>
                    <Input sx={{my:'10px',width:'100%'}} onBlur={HandleOnBlur}  name='name' type='text' placeholder='Full Name' />
                    <br />
                    <Input sx={{my:'10px',width:'100%'}} onBlur={HandleOnBlur} name='email' type='email'  placeholder ='Email' />
                    <br />
                    <Input sx={{my:'10px',width:'100%'}} onBlur={HandleOnBlur} name='password' type='password'  placeholder='Password' />
                    <br />
                    <Button variant="contained" sx={{my:'20px',width:'100%'}} type='submit'>Register</Button>
                </form>  
                <Link style={{fontSize:'20px', textDecoration:'none',color:'indigo',my:'30px'}} to={'/login'}>Login Here</Link>
            </Box>
        </Box>
           
        </Box>
    );
};

export default Resgistration;