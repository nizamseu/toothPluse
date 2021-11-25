import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Services from '../Services/Services';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  
`;
const Home = () => {
   const {isLoading} =useAuth();

   if(isLoading){
    return <div className="sweet-loading">
  
    <ClipLoader color="FFFFFF"  css={override} size={250} >
      Loadding...
    </ClipLoader>
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