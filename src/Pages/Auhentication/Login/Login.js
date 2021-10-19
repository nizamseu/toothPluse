import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
   const history =useHistory()
  const location = useLocation();
    const {handleGithubSignIn,setError,setIsLoading,user,loginWithemailandPass,loginData,setLoginData,googleLogIn}=useFirebase();
    
    const {from } = location.state || { from: { pathname: "/home" } };
    const url =from.pathname;
console.log(url);
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
        <div>
       
       
            <input onBlur={HandleOnBlur} name='email' type='email'  placeholder ='Email' />
            <br />
            <input onBlur={HandleOnBlur} name='password' type='password'  placeholder='Password' />
            <br />
            <button onClick={handleEmailPass}>Login</button>
      
            <Button onClick={handleGoogleLogin}>Google</Button>
            <Button onClick={handleGitLogin}>GitHub</Button>
        </div>
    );
};

export default Login;