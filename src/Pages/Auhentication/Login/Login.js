import Button from '@restart/ui/esm/Button';
import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const {googleLogIn}=useFirebase();
   

    return (
        <div>
       
         
            <Button onClick={googleLogIn}>Login</Button>
        </div>
    );
};

export default Login;