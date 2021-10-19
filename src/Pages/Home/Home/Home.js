import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
   const {isLoading} =useAuth();
   if(isLoading){
    return <div>
      <h1>Loading....</h1>
    </div>
  }
    return (
        <div>
            <Banner></Banner>
           <Services></Services>
           <Doctors></Doctors>
        </div>
    );
};

export default Home;