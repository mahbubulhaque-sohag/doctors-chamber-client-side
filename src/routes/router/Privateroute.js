import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Privateroute = ({children}) => {

    const {user, loading} = useContext(authContext);
    const location = useLocation();

    // if(loading){
    //    return <Spinner animation="grow" variant="primary" />
    // }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default Privateroute;