import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
const Resgistration = () => {
    const {setInputData,createNewUser,inputData}=useFirebase();
    

    const HandleOnBlur =(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
      
    }
    
    const handleRegistration=(e)=>{
        e.preventDefault();
        createNewUser()
        e.target.reset()
    }
  
    return (
        <div>
            <h1>Registration</h1>
          <form onSubmit={handleRegistration}>
     
            <input onBlur={HandleOnBlur}  name='name' type='text' placeholder='Full Name' />
            
            <br />
            <input onBlur={HandleOnBlur} name='email' type='email'  placeholder ='Email' />
            
            <br />
            <input onBlur={HandleOnBlur} name='password' type='password'  placeholder='Password' />
           
            <br />
           <button type='submit'>Register</button>
           </form>
        </div>
    );
};

export default Resgistration;