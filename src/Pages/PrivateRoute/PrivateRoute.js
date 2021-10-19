import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useFirebase();
if(isLoading){
  return <div>
    <h1>Loading....</h1>
  </div>
}
    return ( <Route
      {...rest}
      render={({ location }) =>
       user.email  ? (
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