import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authContext';

const PrivateRoutes = ({children}) => {

    const { currentUser } = useAuth();
  
    return currentUser ? children : <Navigate to='/login' />
}

export default PrivateRoutes