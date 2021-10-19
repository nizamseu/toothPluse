import { useEffect, useState } from "react"
import firebaseInitialized from "../Firebase/firebase.initialized"
import {
    getAuth,onAuthStateChanged, 
    GoogleAuthProvider ,signInWithPopup,
    createUserWithEmailAndPassword ,updateProfile ,
    signInWithEmailAndPassword ,signOut,
} from "firebase/auth";

firebaseInitialized()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [inputData,setInputData]=useState({})
    const [loginData,setLoginData]=useState({})
    const [error,setError]=useState({})
    const [isLoading,setIsLoading]=useState(true)



    const auth = getAuth();
// providers
const GoogleProvider = new GoogleAuthProvider();

    // login with Google

const googleLogIn =()=>{
  setIsLoading(true)
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
       
    }).catch((error) => {
      setError(error.message)
    })
    .finally(()=> setIsLoading(false));
}


// Create User with email and pass
const createNewUser =()=>{
    createUserWithEmailAndPassword(auth, inputData.email, inputData.password)
  .then((result) => {
    updateProfileName()
  })
  .catch((error) => {
    setError(error.message) ;
   
  });

}

// update Profile name
const updateProfileName =()=>{
  updateProfile(auth.currentUser, {
    displayName: inputData?.name
  }).then(() => {
    
  }).catch((error) => {
    setError(error.message) ;
  });
}


//login withemail and password
const loginWithemailandPass=()=>{
  setIsLoading(true)
  signInWithEmailAndPassword(auth, loginData?.email, loginData?.password)
  .then((result) => {
    
  })
  .catch((error) => {
    setError(error.message);
  }).finally(()=> setIsLoading(false));
}


//logOut 
const handleSignOut = () => {
  setIsLoading(true)
  signOut(auth)
    .then(() => {
      setUser({});
    })
    .catch((error) => {
      console.log(error.message);
    }).finally(()=> setIsLoading(false));
};
console.log("from",loginData);
console.log(user);




// onAuthStateChanged
useEffect(() => {
   const unsubscribed= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }else{
        setUser({})
      }
      setIsLoading(false)
    });
    return ()=>unsubscribed
  }, []);
  
  
  
  


// returning properties
    return{
        user,
        googleLogIn,
        error,
        setInputData,
        createNewUser,
        inputData,
        loginData,
        setLoginData,
        loginWithemailandPass,
        handleSignOut,
        isLoading
        
    }
}

export default useFirebase;