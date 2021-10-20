import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  
`;
const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuth();
if(isLoading){
  return <div>
    <ClipLoader color="FFFFFF"  css={override} size={250} >
      
    </ClipLoader>
  </div>
}
    return ( <Route
      {...rest}
      render={({ location }) =>
      (user.displayName|| user.email)  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />

    );
};

export default PrivateRoute;