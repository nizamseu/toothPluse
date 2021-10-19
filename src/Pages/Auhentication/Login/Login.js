import { TextField,Button,Input , Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
   const history =useHistory()
  const location = useLocation();
    const {handleGithubSignIn,setError,setIsLoading,user,loginWithemailandPass,loginData,setLoginData,googleLogIn}=useFirebase();
    
    const {from } = location.state || { from: { pathname: "/home" } };
    const url =from.pathname;

    const HandleOnBlur =(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
// google sign In 
    const handleGoogleLogin=()=>{
        googleLogIn()
        .then((result) => {
            history.push(url)
        }).catch((error) => {
          setError(error.message)
        })
        .finally(()=> setIsLoading(false));
    }

// sign In with email and pass
const handleEmailPass =()=>{
    loginWithemailandPass()
    .then((result) => { 
        history.push(url)
    })
    .catch((error) => {
      setError(error.message);
    }).finally(()=> setIsLoading(false));
}
// github Login

const handleGitLogin=()=>{
    handleGithubSignIn()
    .then((result) => {
        history.push(url)
    }).catch((error) => {
      setError(error.message)
    })
    .finally(()=> setIsLoading(false));
}
    return (
       <Box sx={{
           display:'flex',
           height:'100vh',
           justifyContent:'center',
           alignItems:'center',
          

           }}>
            <Box sx={{
                width:'350px',
                padding:'20px',
               borderRadius:'10px',
                boxShadow: '10px 10px 25px gray',
            }}>
            <Box sx={{my:'10px'}}><h3>Login to account</h3>
            <Typography>Access to the most powerfull tool in the entire design and web industry.</Typography>
            
            </Box>

            <Box >
                <Input sx={{my:'20px',width:'100%'}}  onBlur={HandleOnBlur} name='email' type='email' placeholder='Email' />
                <br />
                <Input sx={{my:'20px',width:'100%'}} onBlur={HandleOnBlur} name='password' type='password'  placeholder='Password' />
                <br />
                <Button variant="contained" sx={{my:'20px',width:'100%'}} onClick={handleEmailPass}>Login</Button>
            </Box>
            <Typography className='text-center  mb-1'>Or</Typography>
           <Box sx={{display:'flex',justifyContent:'space-around'}}>
            
                <Button  sx={{mx:'10px'}} onClick={handleGoogleLogin}>Google</Button>
                <Button  sx={{mx:'10px'}} onClick={handleGitLogin}>GitHub</Button>
           </Box>
            <Link style={{fontSize:'20px', textDecoration:'none',color:'black',my:'20px'}} to={'/reg'}>Register new account</Link>
        </Box>
       </Box>
    );
};

export default Login;