import { useEffect, useState } from "react"
import firebaseInitialized from "../Firebase/firebase.initialized"
import {
    getAuth,onAuthStateChanged, 
    GoogleAuthProvider ,signInWithPopup,
    createUserWithEmailAndPassword 
} from "firebase/auth";

firebaseInitialized()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [inputData,setInputData]=useState({})
    const [error,setError]=useState({})

console.log("from",inputData);

    const auth = getAuth();
// providers
const GoogleProvider = new GoogleAuthProvider();

    // login with Google

const googleLogIn =()=>{
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
       
    }).catch((error) => {
      setError(error.message)
    });
}


// login with email and pass
const createNewUser =()=>{
    createUserWithEmailAndPassword(auth, inputData.email, inputData.password)
  .then((result) => {
    setInputData({})
  })
  .catch((error) => {
    setError(error.message) ;
   
  });


}

console.log(user);




// onAuthStateChanged
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  
  
  
  


// returning properties
    return{
        user,
        googleLogIn,
        error,
        setInputData,
        createNewUser,
        inputData,
        
    }
}

export default useFirebase;