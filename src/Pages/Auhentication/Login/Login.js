import Button from '@restart/ui/esm/Button';
import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const {loginWithemailandPass,loginData,setLoginData,googleLogIn}=useFirebase();
    
    const HandleOnBlur =(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
// const handleLogin=(e)=>{
//     e.preventDefault();
//     loginWithemailandPass()
//     e.target.reset()
// }
    return (
        <div>
       
       
            <input onBlur={HandleOnBlur} name='email' type='email'  placeholder ='Email' />
            <br />
            <input onBlur={HandleOnBlur} name='password' type='password'  placeholder='Password' />
            <br />
            <button onClick={loginWithemailandPass}>Login</button>
      
            <Button onClick={googleLogIn}>Google</Button>
        </div>
    );
};

export default Login;