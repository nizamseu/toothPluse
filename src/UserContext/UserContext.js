import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const UserContextAPI =createContext()

const UserContext = ({children}) => {
    const allData=useFirebase();

    return (
        <UserContextAPI.Provider value={allData}>
            {children}
        </UserContextAPI.Provider>
    );
};

export default UserContext;